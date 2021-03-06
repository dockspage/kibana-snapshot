"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18nFilter = i18nFilter;

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
function i18nFilter(i18n) {
  return function (id) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$defaultMessage = _ref.defaultMessage,
        defaultMessage = _ref$defaultMessage === void 0 ? '' : _ref$defaultMessage,
        _ref$values = _ref.values,
        values = _ref$values === void 0 ? {} : _ref$values;

    return i18n(id, {
      values: values,
      defaultMessage: defaultMessage
    });
  };
}