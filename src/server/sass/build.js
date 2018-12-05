'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Build = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _nodeSass = require('node-sass');

var _nodeSass2 = _interopRequireDefault(_nodeSass);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

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

const renderSass = (0, _util.promisify)(_nodeSass2.default.render);
const writeFile = (0, _util.promisify)(_fs2.default.writeFile);

class Build {
  constructor(source) {
    this.source = source;
    this.includedFiles = [source];
  }

  outputPath() {
    const fileName = _path2.default.basename(this.source, _path2.default.extname(this.source)) + '.css';
    return _path2.default.join(_path2.default.dirname(this.source), fileName);
  }

  /**
   * Glob based on source path
   */

  getGlob() {
    return _path2.default.join(_path2.default.dirname(this.source), '**', '*.s{a,c}ss');
  }

  async buildIfIncluded(path) {
    if (this.includedFiles && this.includedFiles.includes(path)) {
      await this.build();
      return true;
    }

    return false;
  }

  /**
   * Transpiles SASS and writes CSS to output
   */

  async build() {
    const outFile = this.outputPath();
    const rendered = await renderSass({
      file: this.source,
      outFile,
      sourceMap: true,
      sourceMapEmbed: true,
      includePaths: [_path2.default.resolve(__dirname, '../..'), _path2.default.resolve(__dirname, '../../../node_modules')]
    });

    const prefixed = (0, _postcss2.default)([_autoprefixer2.default]).process(rendered.css);

    this.includedFiles = rendered.stats.includedFiles;

    await writeFile(outFile, prefixed.css);

    return this;
  }
}
exports.Build = Build;