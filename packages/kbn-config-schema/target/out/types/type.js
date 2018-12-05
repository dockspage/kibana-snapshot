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
const errors_1 = require("../errors");
const internals_1 = require("../internals");
const references_1 = require("../references");
class Type {
    constructor(schema, options = {}) {
        // This is just to enable the `TypeOf` helper, and because TypeScript would
        // fail if it wasn't initialized we use a "trick" to which basically just
        // sets the value to `null` while still keeping the type.
        this.type = null;
        if (options.defaultValue !== undefined) {
            schema = schema.optional();
            // If default value is a function, then we must provide description for it.
            if (typeof options.defaultValue === 'function') {
                schema = schema.default(options.defaultValue, 'Type default value');
            }
            else {
                schema = schema.default(references_1.Reference.isReference(options.defaultValue)
                    ? options.defaultValue.getSchema()
                    : options.defaultValue);
            }
        }
        if (options.validate) {
            schema = schema.custom(options.validate);
        }
        // Attach generic error handler only if it hasn't been attached yet since
        // only the last error handler is counted.
        const schemaFlags = schema.describe().flags || {};
        if (schemaFlags.error === undefined) {
            schema = schema.error(([error]) => this.onError(error));
        }
        this.internalSchema = schema;
    }
    validate(value, context = {}, namespace) {
        const { value: validatedValue, error } = internals_1.internals.validate(value, this.internalSchema, {
            context,
            presence: 'required',
        });
        if (error) {
            throw new errors_1.ValidationError(error, namespace);
        }
        return validatedValue;
    }
    /**
     * @internal
     */
    getSchema() {
        return this.internalSchema;
    }
    handleError(type, context, path) {
        return undefined;
    }
    onError(error) {
        if (error instanceof errors_1.SchemaTypeError) {
            return error;
        }
        const { context = {}, type, path: rawPath, message } = error;
        // Before v11.0.0 Joi reported paths as `.`-delimited strings, but more
        // recent version use arrays instead. Once we upgrade Joi, we should just
        // remove this split logic and use `path` provided by Joi directly.
        const path = rawPath ? rawPath.split('.') : [];
        const errorHandleResult = this.handleError(type, context, path);
        if (errorHandleResult instanceof errors_1.SchemaTypeError) {
            return errorHandleResult;
        }
        // If error handler just defines error message, then wrap it into proper
        // `SchemaTypeError` instance.
        if (typeof errorHandleResult === 'string') {
            return new errors_1.SchemaTypeError(errorHandleResult, path);
        }
        // If error is produced by the custom validator, just extract source message
        // from context and wrap it into `SchemaTypeError` instance.
        if (type === 'any.custom') {
            return new errors_1.SchemaTypeError(context.message, path);
        }
        return new errors_1.SchemaTypeError(message || type, path);
    }
}
exports.Type = Type;
