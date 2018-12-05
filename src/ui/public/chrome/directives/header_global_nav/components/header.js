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
import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { 
// TODO: add type annotations
// @ts-ignore
EuiHeader, 
// @ts-ignore
EuiHeaderLogo, 
// @ts-ignore
EuiHeaderSection, 
// @ts-ignore
EuiHeaderSectionItem, } from '@elastic/eui';
import { HeaderAppMenu } from './header_app_menu';
import { HeaderBreadcrumbs } from './header_breadcrumbs';
import { HeaderNavControls } from './header_nav_controls';
import { NavControlSide } from '../';
var Header = /** @class */ (function (_super) {
    tslib_1.__extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.renderLogo = function () {
        var homeHref = this.props.homeHref;
        return React.createElement(EuiHeaderLogo, { iconType: "logoKibana", href: homeHref, "aria-label": "Go to home page" });
    };
    Header.prototype.render = function () {
        var _a = this.props, appTitle = _a.appTitle, breadcrumbs = _a.breadcrumbs, isVisible = _a.isVisible, navControls = _a.navControls, navLinks = _a.navLinks;
        if (!isVisible) {
            return null;
        }
        var leftNavControls = navControls.bySide[NavControlSide.Left];
        var rightNavControls = navControls.bySide[NavControlSide.Right];
        return (React.createElement(EuiHeader, null,
            React.createElement(EuiHeaderSection, null,
                React.createElement(EuiHeaderSectionItem, { border: "right" }, this.renderLogo()),
                React.createElement(HeaderNavControls, { navControls: leftNavControls }),
                React.createElement(HeaderBreadcrumbs, { appTitle: appTitle, breadcrumbs: breadcrumbs })),
            React.createElement(EuiHeaderSection, { side: "right" },
                React.createElement(HeaderNavControls, { navControls: rightNavControls }),
                React.createElement(EuiHeaderSectionItem, null,
                    React.createElement(HeaderAppMenu, { navLinks: navLinks })))));
    };
    return Header;
}(Component));
export { Header };
