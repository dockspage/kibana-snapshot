"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formats = void 0;

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
const formats = {
  number: {
    currency: {
      style: 'currency'
    },
    percent: {
      style: 'percent'
    }
  },
  date: {
    short: {
      month: 'numeric',
      day: 'numeric',
      year: '2-digit'
    },
    medium: {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    },
    long: {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    },
    full: {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }
  },
  time: {
    short: {
      hour: 'numeric',
      minute: 'numeric'
    },
    medium: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    },
    long: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    },
    full: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    }
  }
};
exports.formats = formats;