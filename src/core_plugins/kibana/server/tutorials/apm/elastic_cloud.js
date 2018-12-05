'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElasticCloudInstructions = createElasticCloudInstructions;

var _i18n = require('@kbn/i18n');

var _instruction_variant = require('../../../common/tutorials/instruction_variant');

var _apm_client_instructions = require('./apm_client_instructions');

const createServerUrlInstruction = () => ({
  title: _i18n.i18n.translate('kbn.server.tutorials.apm.serverUrlInstruction.title', {
    defaultMessage: 'APM Server endpoint'
  }),
  textPre: _i18n.i18n.translate('kbn.server.tutorials.apm.serverUrlInstruction.textPre', {
    defaultMessage: 'Retrieve the APM Server URL from the Deployments section on the Elastic Cloud dashboard. \
You will also need the APM Server secret token, which was generated on deployment.'
  })
}); /*
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

function createElasticCloudInstructions() {
  const SERVER_URL_INSTRUCTION = createServerUrlInstruction();

  return {
    instructionSets: [{
      title: _i18n.i18n.translate('kbn.server.tutorials.apm.elasticCloudInstructions.title', {
        defaultMessage: 'APM Agents'
      }),
      instructionVariants: [{
        id: _instruction_variant.INSTRUCTION_VARIANT.NODE,
        instructions: [SERVER_URL_INSTRUCTION, ...(0, _apm_client_instructions.createNodeClientInstructions)()]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.DJANGO,
        instructions: [SERVER_URL_INSTRUCTION, ...(0, _apm_client_instructions.createDjangoClientInstructions)()]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.FLASK,
        instructions: [SERVER_URL_INSTRUCTION, ...(0, _apm_client_instructions.createFlaskClientInstructions)()]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.RAILS,
        instructions: [SERVER_URL_INSTRUCTION, ...(0, _apm_client_instructions.createRailsClientInstructions)()]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.RACK,
        instructions: [SERVER_URL_INSTRUCTION, ...(0, _apm_client_instructions.createRackClientInstructions)()]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.JS,
        instructions: [SERVER_URL_INSTRUCTION, ...(0, _apm_client_instructions.createJsClientInstructions)()]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.GO,
        instructions: [SERVER_URL_INSTRUCTION, ...(0, _apm_client_instructions.createGoClientInstructions)()]
      }, {
        id: _instruction_variant.INSTRUCTION_VARIANT.JAVA,
        instructions: [SERVER_URL_INSTRUCTION, ...(0, _apm_client_instructions.createJavaClientInstructions)()]
      }]
    }]
  };
}