"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const internals_1 = require("../internals");
const type_1 = require("./type");
class LiteralType extends type_1.Type {
    constructor(value) {
        super(internals_1.internals.any(), {
            // Before v13.3.0 Joi.any().value() didn't provide raw value if validation
            // fails, so to display this value in error message we should provide
            // custom validation function. Once we upgrade Joi, we'll be able to use
            // `value()` with custom `any.allowOnly` error handler instead.
            validate(valueToValidate) {
                if (valueToValidate !== value) {
                    return `expected value to equal [${value}] but got [${valueToValidate}]`;
                }
            },
        });
    }
}
exports.LiteralType = LiteralType;
