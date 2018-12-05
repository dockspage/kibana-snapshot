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
import * as PropTypes from 'prop-types';
// TODO: we'll be able to get rid of this shape once all of dashboard is typescriptified too.
export var embeddableShape = PropTypes.shape({
    destroy: PropTypes.func.isRequired,
    metadata: PropTypes.object.isRequired,
    onContainerStateChanged: PropTypes.func.isRequired,
    render: PropTypes.func.isRequired,
});
var Embeddable = /** @class */ (function () {
    // TODO: Make title and editUrl required and move out of options parameter.
    function Embeddable(options) {
        if (options === void 0) { options = {}; }
        this.metadata = {};
        this.metadata = options.metadata || {};
        if (options.render) {
            this.render = options.render;
        }
        if (options.destroy) {
            this.destroy = options.destroy;
        }
        if (options.onContainerStateChanged) {
            this.onContainerStateChanged = options.onContainerStateChanged;
        }
    }
    /**
     * An embeddable can return inspector adapters if it want the inspector to be
     * available via the context menu of that panel.
     * @return Inspector adapters that will be used to open an inspector for.
     */
    Embeddable.prototype.getInspectorAdapters = function () {
        return undefined;
    };
    Embeddable.prototype.destroy = function () {
        return;
    };
    return Embeddable;
}());
export { Embeddable };
