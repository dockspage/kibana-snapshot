'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alter = require('../lib/alter.js');

var _alter2 = _interopRequireDefault(_alter);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _chainable = require('../lib/classes/chainable');

var _chainable2 = _interopRequireDefault(_chainable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const positions = ['left', 'right', 'center']; /*
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

const defaultPosition = positions[0];

exports.default = new _chainable2.default('movingstd', {
  args: [{
    name: 'inputSeries',
    types: ['seriesList']
  }, {
    name: 'window',
    types: ['number'],
    help: 'Number of points to compute the standard deviation over.'
  }, {
    name: 'position',
    types: ['string', 'null'],
    help: `Position of the window slice relative to the result time. Options are ${positions.join(', ')}. Default: ${defaultPosition}`
  }],
  aliases: ['mvstd'],
  help: 'Calculate the moving standard deviation over a given window. Uses naive two-pass algorithm. Rounding errors ' + 'may become more noticeable with very long series, or series with very large numbers.',
  fn: function movingstdFn(args) {
    return (0, _alter2.default)(args, function (eachSeries, _window, _position) {

      _position = _position || defaultPosition;

      if (!_lodash2.default.contains(positions, _position)) throw new Error('Valid positions are: ' + positions.join(', '));

      const pairs = eachSeries.data;
      const pairsLen = pairs.length;
      eachSeries.label = eachSeries.label + ' mvstd=' + _window;

      function toPoint(point, pairSlice) {
        const average = _lodash2.default.chain(pairSlice).map(1).reduce(function (memo, num) {
          return memo + num;
        }).value() / _window;

        const variance = _lodash2.default.chain(pairSlice).map(function (point) {
          return Math.pow(point[1] - average, 2);
        }).reduce(function (memo, num) {
          return memo + num;
        }).value() / (_window - 1);

        return [point[0], Math.sqrt(variance)];
      }

      if (_position === 'center') {
        const windowLeft = Math.floor(_window / 2);
        const windowRight = _window - windowLeft;
        eachSeries.data = _lodash2.default.map(pairs, function (point, i) {
          if (i < windowLeft || i >= pairsLen - windowRight) return [point[0], null];
          return toPoint(point, pairs.slice(i - windowLeft, i + windowRight));
        });
      } else if (_position === 'left') {
        eachSeries.data = _lodash2.default.map(pairs, function (point, i) {
          if (i < _window) return [point[0], null];
          return toPoint(point, pairs.slice(i - _window, i));
        });
      } else if (_position === 'right') {
        eachSeries.data = _lodash2.default.map(pairs, function (point, i) {
          if (i >= pairsLen - _window) return [point[0], null];
          return toPoint(point, pairs.slice(i, i + _window));
        });
      }

      return eachSeries;
    });
  }
});
module.exports = exports['default'];