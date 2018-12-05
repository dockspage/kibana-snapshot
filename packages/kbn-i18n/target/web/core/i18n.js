"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMessages = addMessages;
exports.getMessages = getMessages;
exports.setLocale = setLocale;
exports.getLocale = getLocale;
exports.setDefaultLocale = setDefaultLocale;
exports.getDefaultLocale = getDefaultLocale;
exports.setFormats = setFormats;
exports.getFormats = getFormats;
exports.getRegisteredLocales = getRegisteredLocales;
exports.translate = translate;
exports.init = init;

var _intlFormatCache = _interopRequireDefault(require("intl-format-cache"));

var _intlMessageformat = _interopRequireDefault(require("intl-messageformat"));

var _intlRelativeformat = _interopRequireDefault(require("intl-relativeformat"));

var _formats = require("./formats");

var _helper = require("./helper");

require("./locales.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EN_LOCALE = 'en';
var LOCALE_DELIMITER = '-';
var messages = {};
var getMessageFormat = (0, _intlFormatCache.default)(_intlMessageformat.default);
var defaultLocale = EN_LOCALE;
var currentLocale = EN_LOCALE;
var formats = _formats.formats;
_intlMessageformat.default.defaultLocale = defaultLocale;
_intlRelativeformat.default.defaultLocale = defaultLocale;
/**
 * Returns message by the given message id.
 * @param id - path to the message
 */

function getMessageById(id) {
  return getMessages()[id];
}
/**
 * Normalizes locale to make it consistent with IntlMessageFormat locales
 * @param locale
 */


function normalizeLocale(locale) {
  return locale.toLowerCase().replace('_', LOCALE_DELIMITER);
}
/**
 * Provides a way to register translations with the engine
 * @param newMessages
 * @param [locale = messages.locale]
 */


function addMessages() {
  var newMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : newMessages.locale;

  if (!locale || !(0, _helper.isString)(locale)) {
    throw new Error('[I18n] A `locale` must be a non-empty string to add messages.');
  }

  if (newMessages.locale && newMessages.locale !== locale) {
    throw new Error('[I18n] A `locale` in the messages object is different from the one provided as a second argument.');
  }

  var normalizedLocale = normalizeLocale(locale);
  messages[normalizedLocale] = _objectSpread({}, messages[normalizedLocale], newMessages);
}
/**
 * Returns messages for the current language
 */


function getMessages() {
  return messages[currentLocale] || {};
}
/**
 * Tells the engine which language to use by given language key
 * @param locale
 */


function setLocale(locale) {
  if (!locale || !(0, _helper.isString)(locale)) {
    throw new Error('[I18n] A `locale` must be a non-empty string.');
  }

  currentLocale = normalizeLocale(locale);
}
/**
 * Returns the current locale
 */


function getLocale() {
  return currentLocale;
}
/**
 * Tells the library which language to fallback when missing translations
 * @param locale
 */


function setDefaultLocale(locale) {
  if (!locale || !(0, _helper.isString)(locale)) {
    throw new Error('[I18n] A `locale` must be a non-empty string.');
  }

  defaultLocale = normalizeLocale(locale);
  _intlMessageformat.default.defaultLocale = defaultLocale;
  _intlRelativeformat.default.defaultLocale = defaultLocale;
}

function getDefaultLocale() {
  return defaultLocale;
}
/**
 * Supplies a set of options to the underlying formatter
 * [Default format options used as the prototype of the formats]
 * {@link https://github.com/yahoo/intl-messageformat/blob/master/src/core.js#L62}
 * These are used when constructing the internal Intl.NumberFormat
 * and Intl.DateTimeFormat instances.
 * @param newFormats
 * @param [newFormats.number]
 * @param [newFormats.date]
 * @param [newFormats.time]
 */


function setFormats(newFormats) {
  if (!(0, _helper.isObject)(newFormats) || !(0, _helper.hasValues)(newFormats)) {
    throw new Error('[I18n] A `formats` must be a non-empty object.');
  }

  formats = (0, _helper.mergeAll)(formats, newFormats);
}
/**
 * Returns current formats
 */


function getFormats() {
  return formats;
}
/**
 * Returns array of locales having translations
 */


function getRegisteredLocales() {
  return Object.keys(messages);
}

/**
 * Translate message by id
 * @param id - translation id to be translated
 * @param [options]
 * @param [options.values] - values to pass into translation
 * @param [options.defaultMessage] - will be used unless translation was successful
 */
function translate(id) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    values: {},
    defaultMessage: ''
  },
      _ref$values = _ref.values,
      values = _ref$values === void 0 ? {} : _ref$values,
      _ref$defaultMessage = _ref.defaultMessage,
      defaultMessage = _ref$defaultMessage === void 0 ? '' : _ref$defaultMessage;

  if (!id || !(0, _helper.isString)(id)) {
    throw new Error('[I18n] An `id` must be a non-empty string to translate a message.');
  }

  var message = getMessageById(id);

  if (!message && !defaultMessage) {
    throw new Error("[I18n] Cannot format message: \"".concat(id, "\". Default message must be provided."));
  }

  if (!(0, _helper.hasValues)(values)) {
    return message || defaultMessage;
  }

  if (message) {
    try {
      var msg = getMessageFormat(message, getLocale(), getFormats());
      return msg.format(values);
    } catch (e) {
      throw new Error("[I18n] Error formatting message: \"".concat(id, "\" for locale: \"").concat(getLocale(), "\".\n").concat(e));
    }
  }

  try {
    var _msg = getMessageFormat(defaultMessage, getDefaultLocale(), getFormats());

    return _msg.format(values);
  } catch (e) {
    throw new Error("[I18n] Error formatting the default message for: \"".concat(id, "\".\n").concat(e));
  }
}
/**
 * Initializes the engine
 * @param newMessages
 */


function init(newMessages) {
  if (!newMessages) {
    return;
  }

  addMessages(newMessages);

  if (newMessages.locale) {
    setLocale(newMessages.locale);
  }

  if (newMessages.formats) {
    setFormats(newMessages.formats);
  }
}