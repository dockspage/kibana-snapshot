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
import React from 'react';
import { EuiButtonEmpty, EuiFieldText, EuiFormRow, keyCodes } from '@elastic/eui';
export function PanelOptionsMenuForm(_a) {
    var title = _a.title, onReset = _a.onReset, onUpdatePanelTitle = _a.onUpdatePanelTitle, onClose = _a.onClose;
    function onInputChange(event) {
        onUpdatePanelTitle(event.target.value);
    }
    function onKeyDown(event) {
        if (event.keyCode === keyCodes.ENTER) {
            onClose();
        }
    }
    return (React.createElement("div", { className: "dshPanel__optionsMenuForm", "data-test-subj": "dashboardPanelTitleInputMenuItem" },
        React.createElement(EuiFormRow, { label: "Panel title" },
            React.createElement(EuiFieldText, { id: "panelTitleInput", "data-test-subj": "customDashboardPanelTitleInput", name: "min", type: "text", value: title, onChange: onInputChange, onKeyDown: onKeyDown, "aria-label": "Changes to this input are applied immediately. Press enter to exit." })),
        React.createElement(EuiButtonEmpty, { "data-test-subj": "resetCustomDashboardPanelTitle", onClick: onReset }, "Reset title")));
}
