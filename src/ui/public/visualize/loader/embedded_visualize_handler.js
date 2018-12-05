/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { EventEmitter } from 'events';
import { debounce } from 'lodash';
import * as Rx from 'rxjs';
import { share } from 'rxjs/operators';
import { RenderCompleteHelper } from '../../render_complete';
import { timefilter } from '../../timefilter';
import { visualizationLoader } from './visualization_loader';
import { VisualizeDataLoader } from './visualize_data_loader';
var RENDER_COMPLETE_EVENT = 'render_complete';
var LOADING_ATTRIBUTE = 'data-loading';
/**
 * A handler to the embedded visualization. It offers several methods to interact
 * with the visualization.
 */
var EmbeddedVisualizeHandler = /** @class */ (function () {
    function EmbeddedVisualizeHandler(element, savedObject, params) {
        var _this = this;
        this.element = element;
        this.loaded = false;
        this.destroyed = false;
        this.listeners = new EventEmitter();
        this.shouldForceNextFetch = false;
        this.debouncedFetchAndRender = debounce(function () {
            if (_this.destroyed) {
                return;
            }
            var forceFetch = _this.shouldForceNextFetch;
            _this.shouldForceNextFetch = false;
            _this.fetch(forceFetch).then(_this.render);
        }, 100);
        this.onRenderCompleteListener = function () {
            _this.listeners.emit(RENDER_COMPLETE_EVENT);
            _this.element.removeAttribute(LOADING_ATTRIBUTE);
        };
        this.onUiStateChange = function () {
            _this.fetchAndRender();
        };
        /**
         * Fetches new data and renders the chart. This will happen debounced for a couple
         * of milliseconds, to bundle fast successive calls into one fetch and render,
         * e.g. while resizing the window, this will be triggered constantly on the resize
         * event.
         *
         * @param  forceFetch=false Whether the request handler should be signaled to forceFetch
         *    (i.e. ignore caching in case it supports it). If at least one call to this
         *    passed `true` the debounced fetch and render will be a force fetch.
         */
        this.fetchAndRender = function (forceFetch) {
            if (forceFetch === void 0) { forceFetch = false; }
            _this.shouldForceNextFetch = forceFetch || _this.shouldForceNextFetch;
            _this.element.setAttribute(LOADING_ATTRIBUTE, '');
            _this.debouncedFetchAndRender();
        };
        this.handleVisUpdate = function () {
            if (_this.appState) {
                _this.appState.vis = _this.vis.getState();
                _this.appState.save();
            }
            _this.fetchAndRender();
        };
        /**
         * Force the fetch of new data and renders the chart again.
         */
        this.reload = function () {
            _this.fetchAndRender(true);
        };
        this.fetch = function (forceFetch) {
            if (forceFetch === void 0) { forceFetch = false; }
            _this.dataLoaderParams.aggs = _this.vis.getAggConfig();
            _this.dataLoaderParams.forceFetch = forceFetch;
            return _this.dataLoader.fetch(_this.dataLoaderParams).then(function (data) {
                _this.dataSubject.next(data);
                return data;
            });
        };
        this.render = function (visData) {
            if (visData === void 0) { visData = null; }
            return visualizationLoader
                .render(_this.element, _this.vis, visData, _this.uiState, {
                listenOnChange: false,
            })
                .then(function () {
                if (!_this.loaded) {
                    _this.loaded = true;
                    _this.fetchAndRender();
                }
            });
        };
        var searchSource = savedObject.searchSource, vis = savedObject.vis;
        var appState = params.appState, uiState = params.uiState, queryFilter = params.queryFilter, timeRange = params.timeRange, filters = params.filters, query = params.query, Private = params.Private;
        this.dataLoaderParams = {
            searchSource: searchSource,
            timeRange: timeRange,
            query: query,
            queryFilter: queryFilter,
            filters: filters,
            uiState: uiState,
            aggs: vis.getAggConfig(),
            forceFetch: false,
        };
        // Listen to the first RENDER_COMPLETE_EVENT to resolve this promise
        this.firstRenderComplete = new Promise(function (resolve) {
            _this.listeners.once(RENDER_COMPLETE_EVENT, resolve);
        });
        element.setAttribute(LOADING_ATTRIBUTE, '');
        element.addEventListener('renderComplete', this.onRenderCompleteListener);
        this.appState = appState;
        this.vis = vis;
        if (uiState) {
            vis._setUiState(uiState);
        }
        this.uiState = this.vis.getUiState();
        this.vis.on('update', this.handleVisUpdate);
        this.vis.on('reload', this.reload);
        this.uiState.on('change', this.onUiStateChange);
        timefilter.on('autoRefreshFetch', this.reload);
        this.dataLoader = new VisualizeDataLoader(vis, Private);
        this.renderCompleteHelper = new RenderCompleteHelper(element);
        this.dataSubject = new Rx.Subject();
        this.data$ = this.dataSubject.asObservable().pipe(share());
        this.render();
    }
    /**
     * Update properties of the embedded visualization. This method does not allow
     * updating all initial parameters, but only a subset of the ones allowed
     * in {@link VisualizeUpdateParams}.
     *
     * @param params The parameters that should be updated.
     */
    EmbeddedVisualizeHandler.prototype.update = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        // Apply data- attributes to the element if specified
        var dataAttrs = params.dataAttrs;
        if (dataAttrs) {
            Object.keys(dataAttrs).forEach(function (key) {
                if (dataAttrs[key] === null) {
                    _this.element.removeAttribute("data-" + key);
                    return;
                }
                _this.element.setAttribute("data-" + key, dataAttrs[key]);
            });
        }
        var fetchRequired = false;
        if (params.hasOwnProperty('timeRange')) {
            fetchRequired = true;
            this.dataLoaderParams.timeRange = params.timeRange;
        }
        if (params.hasOwnProperty('filters')) {
            fetchRequired = true;
            this.dataLoaderParams.filters = params.filters;
        }
        if (params.hasOwnProperty('query')) {
            fetchRequired = true;
            this.dataLoaderParams.query = params.query;
        }
        if (fetchRequired) {
            this.fetchAndRender();
        }
    };
    /**
     * Destroy the underlying Angular scope of the visualization. This should be
     * called whenever you remove the visualization.
     */
    EmbeddedVisualizeHandler.prototype.destroy = function () {
        this.destroyed = true;
        this.debouncedFetchAndRender.cancel();
        timefilter.off('autoRefreshFetch', this.reload);
        this.vis.removeListener('reload', this.reload);
        this.vis.removeListener('update', this.handleVisUpdate);
        this.element.removeEventListener('renderComplete', this.onRenderCompleteListener);
        this.uiState.off('change', this.onUiStateChange);
        visualizationLoader.destroy(this.element);
        this.renderCompleteHelper.destroy();
    };
    /**
     * Return the actual DOM element (wrapped in jQuery) of the rendered visualization.
     * This is especially useful if you used `append: true` in the parameters where
     * the visualization will be appended to the specified container.
     */
    EmbeddedVisualizeHandler.prototype.getElement = function () {
        return this.element;
    };
    /**
     * Opens the inspector for the embedded visualization. This will return an
     * handler to the inspector to close and interact with it.
     * @return An inspector session to interact with the opened inspector.
     */
    EmbeddedVisualizeHandler.prototype.openInspector = function () {
        return this.vis.openInspector();
    };
    /**
     * Returns a promise, that will resolve (without a value) once the first rendering of
     * the visualization has finished. If you want to listen to consecutive rendering
     * events, look into the `addRenderCompleteListener` method.
     *
     * @returns Promise, that resolves as soon as the visualization is done rendering
     *    for the first time.
     */
    EmbeddedVisualizeHandler.prototype.whenFirstRenderComplete = function () {
        return this.firstRenderComplete;
    };
    /**
     * Adds a listener to be called whenever the visualization finished rendering.
     * This can be called multiple times, when the visualization rerenders, e.g. due
     * to new data.
     *
     * @param {function} listener The listener to be notified about complete renders.
     */
    EmbeddedVisualizeHandler.prototype.addRenderCompleteListener = function (listener) {
        this.listeners.addListener(RENDER_COMPLETE_EVENT, listener);
    };
    /**
     * Removes a previously registered render complete listener from this handler.
     * This listener will no longer be called when the visualization finished rendering.
     *
     * @param {function} listener The listener to remove from this handler.
     */
    EmbeddedVisualizeHandler.prototype.removeRenderCompleteListener = function (listener) {
        this.listeners.removeListener(RENDER_COMPLETE_EVENT, listener);
    };
    return EmbeddedVisualizeHandler;
}());
export { EmbeddedVisualizeHandler };
