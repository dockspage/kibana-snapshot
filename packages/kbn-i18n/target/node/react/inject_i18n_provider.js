"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectI18nProvider = injectI18nProvider;

var _react = _interopRequireDefault(require("react"));

var _provider = require("./provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function injectI18nProvider(WrappedComponent) {
  const I18nProviderWrapper = props => {
    return _react.default.createElement(_provider.I18nProvider, null, _react.default.createElement(WrappedComponent, props));
  }; // Original propTypes from the wrapped component should be re-exposed
  // since it will be used by reactDirective Angular service
  // that will rely on propTypes to watch attributes with these names


  I18nProviderWrapper.propTypes = WrappedComponent.propTypes;
  return I18nProviderWrapper;
}