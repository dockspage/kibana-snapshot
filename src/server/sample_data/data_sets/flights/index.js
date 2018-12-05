'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flightsSpecProvider = flightsSpecProvider;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _saved_objects = require('./saved_objects');

var _field_mappings = require('./field_mappings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flightsSpecProvider() {
  return {
    id: 'flights',
    name: 'Sample flight data',
    description: 'Sample data, visualizations, and dashboards for monitoring flight routes.',
    previewImagePath: '/plugins/kibana/home/sample_data_resources/flights/dashboard.png',
    overviewDashboard: '7adfa750-4c81-11e8-b3d7-01146121b73d',
    defaultIndex: 'd3d7af60-4c81-11e8-b3d7-01146121b73d',
    savedObjects: _saved_objects.savedObjects,
    dataIndices: [{
      id: 'flights',
      dataPath: _path2.default.join(__dirname, './flights.json.gz'),
      fields: _field_mappings.fieldMappings,
      timeFields: ['timestamp'],
      currentTimeMarker: '2018-01-09T00:00:00',
      preserveDayOfWeekTimeOfDay: true
    }]
  };
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