"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nProvider = void 0;

var PropTypes = _interopRequireWildcard(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var i18n = _interopRequireWildcard(require("../core"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The library uses the provider pattern to scope an i18n context to a tree
 * of components. This component is used to setup the i18n context for a tree.
 * IntlProvider should wrap react app's root component (inside each react render method).
 */
class I18nProvider extends React.PureComponent {
  render() {
    const {
      children
    } = this.props;
    return React.createElement(_reactIntl.IntlProvider, {
      locale: i18n.getLocale(),
      messages: i18n.getMessages(),
      defaultLocale: i18n.getDefaultLocale(),
      formats: i18n.getFormats(),
      defaultFormats: i18n.getFormats(),
      textComponent: React.Fragment
    }, children);
  }

}

exports.I18nProvider = I18nProvider;

_defineProperty(I18nProvider, "propTypes", {
  children: PropTypes.object
});