'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupLogging = setupLogging;
exports.loggingMixin = loggingMixin;

var _bluebird = require('bluebird');

var _evenBetter = require('even-better');

var _evenBetter2 = _interopRequireDefault(_evenBetter);

var _configuration = require('./configuration');

var _configuration2 = _interopRequireDefault(_configuration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setupLogging(server, config) {
  return (0, _bluebird.fromNode)(cb => {
    server.register({
      register: _evenBetter2.default,
      options: (0, _configuration2.default)(config)
    }, cb);
  });
} /*
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

function loggingMixin(kbnServer, server, config) {
  return setupLogging(server, config);
}