"use strict";

var _intlMessageformat = _interopRequireDefault(require("intl-messageformat"));

var _intlRelativeformat = _interopRequireDefault(require("intl-relativeformat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
// TODO: Get rid of this file once https://github.com/elastic/kibana/pull/20105
// is merged and use dynamic import for asynchronous loading of specific locale data
function addLocaleData(localeData) {
  _intlMessageformat.default.__addLocaleData(localeData);

  _intlRelativeformat.default.__addLocaleData(localeData);
}

addLocaleData({
  "locale": "af",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "af-NA",
  "parentLocale": "af"
});
addLocaleData({
  "locale": "agq",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ak",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 0 || n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "am",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n >= 0 && n <= 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ar",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    if (ord) return "other";
    return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n100 >= 3 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 99 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "ar-AE",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-BH",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-DJ",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-DZ",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-EG",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-EH",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-ER",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-IL",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-IQ",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-JO",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-KM",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-KW",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-LB",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-LY",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-MA",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-MR",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-OM",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-PS",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-QA",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-SA",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-SD",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-SO",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-SS",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-SY",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-TD",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-TN",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "ar-YE",
  "parentLocale": "ar"
});
addLocaleData({
  "locale": "as",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10 ? "one" : n == 2 || n == 3 ? "two" : n == 4 ? "few" : n == 6 ? "many" : "other";
    return n >= 0 && n <= 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "asa",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ast",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "az",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        i1000 = i.slice(-3);
    if (ord) return i10 == 1 || i10 == 2 || i10 == 5 || i10 == 7 || i10 == 8 || i100 == 20 || i100 == 50 || i100 == 70 || i100 == 80 ? "one" : i10 == 3 || i10 == 4 || i1000 == 100 || i1000 == 200 || i1000 == 300 || i1000 == 400 || i1000 == 500 || i1000 == 600 || i1000 == 700 || i1000 == 800 || i1000 == 900 ? "few" : i == 0 || i10 == 6 || i100 == 40 || i100 == 60 || i100 == 90 ? "many" : "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "az-Arab",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "az-Cyrl",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "az-Latn",
  "parentLocale": "az"
});
addLocaleData({
  "locale": "bas",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "be",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    if (ord) return (n10 == 2 || n10 == 3) && n100 != 12 && n100 != 13 ? "few" : "other";
    return n10 == 1 && n100 != 11 ? "one" : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? "few" : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "bem",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "bez",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "bg",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "bh",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 0 || n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "bm",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "bm-Nkoo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "bn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 || n == 5 || n == 7 || n == 8 || n == 9 || n == 10 ? "one" : n == 2 || n == 3 ? "two" : n == 4 ? "few" : n == 6 ? "many" : "other";
    return n >= 0 && n <= 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "bn-IN",
  "parentLocale": "bn"
});
addLocaleData({
  "locale": "bo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "bo-IN",
  "parentLocale": "bo"
});
addLocaleData({
  "locale": "br",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        n1000000 = t0 && s[0].slice(-6);
    if (ord) return "other";
    return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? "one" : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? "two" : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? "few" : n != 0 && t0 && n1000000 == 0 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "brx",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "bs",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "",
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    if (ord) return "other";
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
  }
});
addLocaleData({
  "locale": "bs-Cyrl",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "bs-Latn",
  "parentLocale": "bs"
});
addLocaleData({
  "locale": "ca",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return n == 1 || n == 3 ? "one" : n == 2 ? "two" : n == 4 ? "few" : "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ca-AD",
  "parentLocale": "ca"
});
addLocaleData({
  "locale": "ca-ES-VALENCIA",
  "parentLocale": "ca-ES"
});
addLocaleData({
  "locale": "ca-ES",
  "parentLocale": "ca"
});
addLocaleData({
  "locale": "ca-FR",
  "parentLocale": "ca"
});
addLocaleData({
  "locale": "ca-IT",
  "parentLocale": "ca"
});
addLocaleData({
  "locale": "ce",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "cgg",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "chr",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ckb",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ckb-IR",
  "parentLocale": "ckb"
});
addLocaleData({
  "locale": "cs",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : i >= 2 && i <= 4 && v0 ? "few" : !v0 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "cu",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "cy",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 0 || n == 7 || n == 8 || n == 9 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n == 3 || n == 4 ? "few" : n == 5 || n == 6 ? "many" : "other";
    return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n == 3 ? "few" : n == 6 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "da",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        t0 = Number(s[0]) == n;
    if (ord) return "other";
    return n == 1 || !t0 && (i == 0 || i == 1) ? "one" : "other";
  }
});
addLocaleData({
  "locale": "da-GL",
  "parentLocale": "da"
});
addLocaleData({
  "locale": "dav",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "de",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "de-AT",
  "parentLocale": "de"
});
addLocaleData({
  "locale": "de-BE",
  "parentLocale": "de"
});
addLocaleData({
  "locale": "de-CH",
  "parentLocale": "de"
});
addLocaleData({
  "locale": "de-LI",
  "parentLocale": "de"
});
addLocaleData({
  "locale": "de-LU",
  "parentLocale": "de"
});
addLocaleData({
  "locale": "dje",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "dsb",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "",
        v0 = !s[1],
        i100 = i.slice(-2),
        f100 = f.slice(-2);
    if (ord) return "other";
    return v0 && i100 == 1 || f100 == 1 ? "one" : v0 && i100 == 2 || f100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? "few" : "other";
  }
});
addLocaleData({
  "locale": "dua",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "dv",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "dyo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "dz",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ebu",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ee",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ee-TG",
  "parentLocale": "ee"
});
addLocaleData({
  "locale": "el",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "el-CY",
  "parentLocale": "el"
});
addLocaleData({
  "locale": "en",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "en-001",
  "parentLocale": "en"
});
addLocaleData({
  "locale": "en-150",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-AG",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-AI",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-AS",
  "parentLocale": "en"
});
addLocaleData({
  "locale": "en-AT",
  "parentLocale": "en-150"
});
addLocaleData({
  "locale": "en-AU",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-BB",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-BE",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-BI",
  "parentLocale": "en"
});
addLocaleData({
  "locale": "en-BM",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-BS",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-BW",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-BZ",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-CA",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-CC",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-CH",
  "parentLocale": "en-150"
});
addLocaleData({
  "locale": "en-CK",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-CM",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-CX",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-CY",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-DE",
  "parentLocale": "en-150"
});
addLocaleData({
  "locale": "en-DG",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-DK",
  "parentLocale": "en-150"
});
addLocaleData({
  "locale": "en-DM",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-Dsrt",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "en-ER",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-FI",
  "parentLocale": "en-150"
});
addLocaleData({
  "locale": "en-FJ",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-FK",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-FM",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-GB",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-GD",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-GG",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-GH",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-GI",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-GM",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-GU",
  "parentLocale": "en"
});
addLocaleData({
  "locale": "en-GY",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-HK",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-IE",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-IL",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-IM",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-IN",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-IO",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-JE",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-JM",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-KE",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-KI",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-KN",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-KY",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-LC",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-LR",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-LS",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-MG",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-MH",
  "parentLocale": "en"
});
addLocaleData({
  "locale": "en-MO",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-MP",
  "parentLocale": "en"
});
addLocaleData({
  "locale": "en-MS",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-MT",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-MU",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-MW",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-MY",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-NA",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-NF",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-NG",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-NL",
  "parentLocale": "en-150"
});
addLocaleData({
  "locale": "en-NR",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-NU",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-NZ",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-PG",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-PH",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-PK",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-PN",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-PR",
  "parentLocale": "en"
});
addLocaleData({
  "locale": "en-PW",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-RW",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-SB",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-SC",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-SD",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-SE",
  "parentLocale": "en-150"
});
addLocaleData({
  "locale": "en-SG",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-SH",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-SI",
  "parentLocale": "en-150"
});
addLocaleData({
  "locale": "en-SL",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-SS",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-SX",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-SZ",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-Shaw",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "en-TC",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-TK",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-TO",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-TT",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-TV",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-TZ",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-UG",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-UM",
  "parentLocale": "en"
});
addLocaleData({
  "locale": "en-US",
  "parentLocale": "en"
});
addLocaleData({
  "locale": "en-VC",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-VG",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-VI",
  "parentLocale": "en"
});
addLocaleData({
  "locale": "en-VU",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-WS",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-ZA",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-ZM",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "en-ZW",
  "parentLocale": "en-001"
});
addLocaleData({
  "locale": "eo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "es",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "es-419",
  "parentLocale": "es"
});
addLocaleData({
  "locale": "es-AR",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-BO",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-CL",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-CO",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-CR",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-CU",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-DO",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-EA",
  "parentLocale": "es"
});
addLocaleData({
  "locale": "es-EC",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-GQ",
  "parentLocale": "es"
});
addLocaleData({
  "locale": "es-GT",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-HN",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-IC",
  "parentLocale": "es"
});
addLocaleData({
  "locale": "es-MX",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-NI",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-PA",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-PE",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-PH",
  "parentLocale": "es"
});
addLocaleData({
  "locale": "es-PR",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-PY",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-SV",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-US",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-UY",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "es-VE",
  "parentLocale": "es-419"
});
addLocaleData({
  "locale": "et",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "eu",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ewo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "fa",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n >= 0 && n <= 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "fa-AF",
  "parentLocale": "fa"
});
addLocaleData({
  "locale": "ff",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n >= 0 && n < 2 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ff-CM",
  "parentLocale": "ff"
});
addLocaleData({
  "locale": "ff-GN",
  "parentLocale": "ff"
});
addLocaleData({
  "locale": "ff-MR",
  "parentLocale": "ff"
});
addLocaleData({
  "locale": "fi",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "fil",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "",
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    if (ord) return n == 1 ? "one" : "other";
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "fo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "fo-DK",
  "parentLocale": "fo"
});
addLocaleData({
  "locale": "fr",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 ? "one" : "other";
    return n >= 0 && n < 2 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "fr-BE",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-BF",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-BI",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-BJ",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-BL",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-CA",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-CD",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-CF",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-CG",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-CH",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-CI",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-CM",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-DJ",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-DZ",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-GA",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-GF",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-GN",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-GP",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-GQ",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-HT",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-KM",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-LU",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-MA",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-MC",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-MF",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-MG",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-ML",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-MQ",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-MR",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-MU",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-NC",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-NE",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-PF",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-PM",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-RE",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-RW",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-SC",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-SN",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-SY",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-TD",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-TG",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-TN",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-VU",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-WF",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fr-YT",
  "parentLocale": "fr"
});
addLocaleData({
  "locale": "fur",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "fy",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ga",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n;
    if (ord) return n == 1 ? "one" : "other";
    return n == 1 ? "one" : n == 2 ? "two" : t0 && n >= 3 && n <= 6 ? "few" : t0 && n >= 7 && n <= 10 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "gd",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n;
    if (ord) return "other";
    return n == 1 || n == 11 ? "one" : n == 2 || n == 12 ? "two" : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? "few" : "other";
  }
});
addLocaleData({
  "locale": "gl",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "gsw",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "gsw-FR",
  "parentLocale": "gsw"
});
addLocaleData({
  "locale": "gsw-LI",
  "parentLocale": "gsw"
});
addLocaleData({
  "locale": "gu",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 ? "one" : n == 2 || n == 3 ? "two" : n == 4 ? "few" : n == 6 ? "many" : "other";
    return n >= 0 && n <= 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "guw",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 0 || n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "guz",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "gv",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    if (ord) return "other";
    return v0 && i10 == 1 ? "one" : v0 && i10 == 2 ? "two" : v0 && (i100 == 0 || i100 == 20 || i100 == 40 || i100 == 60 || i100 == 80) ? "few" : !v0 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "ha",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ha-Arab",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ha-GH",
  "parentLocale": "ha"
});
addLocaleData({
  "locale": "ha-NE",
  "parentLocale": "ha"
});
addLocaleData({
  "locale": "haw",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "he",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1);
    if (ord) return "other";
    return n == 1 && v0 ? "one" : i == 2 && v0 ? "two" : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "hi",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 ? "one" : n == 2 || n == 3 ? "two" : n == 4 ? "few" : n == 6 ? "many" : "other";
    return n >= 0 && n <= 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "hr",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "",
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    if (ord) return "other";
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
  }
});
addLocaleData({
  "locale": "hr-BA",
  "parentLocale": "hr"
});
addLocaleData({
  "locale": "hsb",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "",
        v0 = !s[1],
        i100 = i.slice(-2),
        f100 = f.slice(-2);
    if (ord) return "other";
    return v0 && i100 == 1 || f100 == 1 ? "one" : v0 && i100 == 2 || f100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? "few" : "other";
  }
});
addLocaleData({
  "locale": "hu",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 || n == 5 ? "one" : "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "hy",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 ? "one" : "other";
    return n >= 0 && n < 2 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "id",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ig",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ii",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "in",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "is",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        t0 = Number(s[0]) == n,
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    if (ord) return "other";
    return t0 && i10 == 1 && i100 != 11 || !t0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "it",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return n == 11 || n == 8 || n == 80 || n == 800 ? "many" : "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "it-CH",
  "parentLocale": "it"
});
addLocaleData({
  "locale": "it-SM",
  "parentLocale": "it"
});
addLocaleData({
  "locale": "iu",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  }
});
addLocaleData({
  "locale": "iu-Latn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "iw",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1);
    if (ord) return "other";
    return n == 1 && v0 ? "one" : i == 2 && v0 ? "two" : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "ja",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "jbo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "jgo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ji",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "jmc",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "jv",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "jw",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ka",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        i100 = i.slice(-2);
    if (ord) return i == 1 ? "one" : i == 0 || i100 >= 2 && i100 <= 20 || i100 == 40 || i100 == 60 || i100 == 80 ? "many" : "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "kab",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n >= 0 && n < 2 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "kaj",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "kam",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "kcg",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "kde",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "kea",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "khq",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ki",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "kk",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1);
    if (ord) return n10 == 6 || n10 == 9 || t0 && n10 == 0 && n != 0 ? "many" : "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "kkj",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "kl",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "kln",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "km",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "kn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n >= 0 && n <= 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ko",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ko-KP",
  "parentLocale": "ko"
});
addLocaleData({
  "locale": "kok",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ks",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ksb",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ksf",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ksh",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 0 ? "zero" : n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ku",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "kw",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  }
});
addLocaleData({
  "locale": "ky",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "lag",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0];
    if (ord) return "other";
    return n == 0 ? "zero" : (i == 0 || i == 1) && n != 0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "lb",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "lg",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "lkt",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ln",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 0 || n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ln-AO",
  "parentLocale": "ln"
});
addLocaleData({
  "locale": "ln-CF",
  "parentLocale": "ln"
});
addLocaleData({
  "locale": "ln-CG",
  "parentLocale": "ln"
});
addLocaleData({
  "locale": "lo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 ? "one" : "other";
    return "other";
  }
});
addLocaleData({
  "locale": "lrc",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "lrc-IQ",
  "parentLocale": "lrc"
});
addLocaleData({
  "locale": "lt",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        f = s[1] || "",
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    if (ord) return "other";
    return n10 == 1 && (n100 < 11 || n100 > 19) ? "one" : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? "few" : f != 0 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "lu",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "luo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "luy",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "lv",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        f = s[1] || "",
        v = f.length,
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        f100 = f.slice(-2),
        f10 = f.slice(-1);
    if (ord) return "other";
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? "zero" : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "mas",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "mas-TZ",
  "parentLocale": "mas"
});
addLocaleData({
  "locale": "mer",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "mfe",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "mg",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 0 || n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "mgh",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "mgo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "mk",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "",
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1);
    if (ord) return i10 == 1 && i100 != 11 ? "one" : i10 == 2 && i100 != 12 ? "two" : (i10 == 7 || i10 == 8) && i100 != 17 && i100 != 18 ? "many" : "other";
    return v0 && i10 == 1 || f10 == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ml",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "mn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "mn-Mong",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "mo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    if (ord) return n == 1 ? "one" : "other";
    return n == 1 && v0 ? "one" : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? "few" : "other";
  }
});
addLocaleData({
  "locale": "mr",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 ? "one" : n == 2 || n == 3 ? "two" : n == 4 ? "few" : "other";
    return n >= 0 && n <= 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ms",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 ? "one" : "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ms-Arab",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ms-BN",
  "parentLocale": "ms"
});
addLocaleData({
  "locale": "ms-SG",
  "parentLocale": "ms"
});
addLocaleData({
  "locale": "mt",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    if (ord) return "other";
    return n == 1 ? "one" : n == 0 || n100 >= 2 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 19 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "mua",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "my",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "mzn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "nah",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "naq",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  }
});
addLocaleData({
  "locale": "nb",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "nb-SJ",
  "parentLocale": "nb"
});
addLocaleData({
  "locale": "nd",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ne",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n;
    if (ord) return t0 && n >= 1 && n <= 4 ? "one" : "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ne-IN",
  "parentLocale": "ne"
});
addLocaleData({
  "locale": "nl",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "nl-AW",
  "parentLocale": "nl"
});
addLocaleData({
  "locale": "nl-BE",
  "parentLocale": "nl"
});
addLocaleData({
  "locale": "nl-BQ",
  "parentLocale": "nl"
});
addLocaleData({
  "locale": "nl-CW",
  "parentLocale": "nl"
});
addLocaleData({
  "locale": "nl-SR",
  "parentLocale": "nl"
});
addLocaleData({
  "locale": "nl-SX",
  "parentLocale": "nl"
});
addLocaleData({
  "locale": "nmg",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "nn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "nnh",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "no",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "nqo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "nr",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "nso",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 0 || n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "nus",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ny",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "nyn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "om",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "om-KE",
  "parentLocale": "om"
});
addLocaleData({
  "locale": "or",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "os",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "os-RU",
  "parentLocale": "os"
});
addLocaleData({
  "locale": "pa",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 0 || n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "pa-Arab",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "pa-Guru",
  "parentLocale": "pa"
});
addLocaleData({
  "locale": "pap",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "pl",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    if (ord) return "other";
    return n == 1 && v0 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "prg",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        f = s[1] || "",
        v = f.length,
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        f100 = f.slice(-2),
        f10 = f.slice(-1);
    if (ord) return "other";
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? "zero" : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ps",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "pt",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n;
    if (ord) return "other";
    return t0 && n >= 0 && n <= 2 && n != 2 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "pt-AO",
  "parentLocale": "pt-PT"
});
addLocaleData({
  "locale": "pt-PT",
  "parentLocale": "pt",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "pt-CV",
  "parentLocale": "pt-PT"
});
addLocaleData({
  "locale": "pt-GW",
  "parentLocale": "pt-PT"
});
addLocaleData({
  "locale": "pt-MO",
  "parentLocale": "pt-PT"
});
addLocaleData({
  "locale": "pt-MZ",
  "parentLocale": "pt-PT"
});
addLocaleData({
  "locale": "pt-ST",
  "parentLocale": "pt-PT"
});
addLocaleData({
  "locale": "pt-TL",
  "parentLocale": "pt-PT"
});
addLocaleData({
  "locale": "qu",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "qu-BO",
  "parentLocale": "qu"
});
addLocaleData({
  "locale": "qu-EC",
  "parentLocale": "qu"
});
addLocaleData({
  "locale": "rm",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "rn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ro",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    if (ord) return n == 1 ? "one" : "other";
    return n == 1 && v0 ? "one" : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? "few" : "other";
  }
});
addLocaleData({
  "locale": "ro-MD",
  "parentLocale": "ro"
});
addLocaleData({
  "locale": "rof",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ru",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    if (ord) return "other";
    return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "ru-BY",
  "parentLocale": "ru"
});
addLocaleData({
  "locale": "ru-KG",
  "parentLocale": "ru"
});
addLocaleData({
  "locale": "ru-KZ",
  "parentLocale": "ru"
});
addLocaleData({
  "locale": "ru-MD",
  "parentLocale": "ru"
});
addLocaleData({
  "locale": "ru-UA",
  "parentLocale": "ru"
});
addLocaleData({
  "locale": "rw",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "rwk",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "sah",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "saq",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "sbp",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "sdh",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "se",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  }
});
addLocaleData({
  "locale": "se-FI",
  "parentLocale": "se"
});
addLocaleData({
  "locale": "se-SE",
  "parentLocale": "se"
});
addLocaleData({
  "locale": "seh",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ses",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "sg",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "sh",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "",
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    if (ord) return "other";
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
  }
});
addLocaleData({
  "locale": "shi",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n;
    if (ord) return "other";
    return n >= 0 && n <= 1 ? "one" : t0 && n >= 2 && n <= 10 ? "few" : "other";
  }
});
addLocaleData({
  "locale": "shi-Latn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "shi-Tfng",
  "parentLocale": "shi"
});
addLocaleData({
  "locale": "si",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "";
    if (ord) return "other";
    return n == 0 || n == 1 || i == 0 && f == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "sk",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : i >= 2 && i <= 4 && v0 ? "few" : !v0 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "sl",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        v0 = !s[1],
        i100 = i.slice(-2);
    if (ord) return "other";
    return v0 && i100 == 1 ? "one" : v0 && i100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || !v0 ? "few" : "other";
  }
});
addLocaleData({
  "locale": "sma",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  }
});
addLocaleData({
  "locale": "smi",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  }
});
addLocaleData({
  "locale": "smj",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  }
});
addLocaleData({
  "locale": "smn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  }
});
addLocaleData({
  "locale": "sms",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  }
});
addLocaleData({
  "locale": "sn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "so",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "so-DJ",
  "parentLocale": "so"
});
addLocaleData({
  "locale": "so-ET",
  "parentLocale": "so"
});
addLocaleData({
  "locale": "so-KE",
  "parentLocale": "so"
});
addLocaleData({
  "locale": "sq",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    if (ord) return n == 1 ? "one" : n10 == 4 && n100 != 14 ? "many" : "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "sq-MK",
  "parentLocale": "sq"
});
addLocaleData({
  "locale": "sq-XK",
  "parentLocale": "sq"
});
addLocaleData({
  "locale": "sr",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "",
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    if (ord) return "other";
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
  }
});
addLocaleData({
  "locale": "sr-Cyrl",
  "parentLocale": "sr"
});
addLocaleData({
  "locale": "sr-Cyrl-BA",
  "parentLocale": "sr-Cyrl"
});
addLocaleData({
  "locale": "sr-Cyrl-ME",
  "parentLocale": "sr-Cyrl"
});
addLocaleData({
  "locale": "sr-Cyrl-XK",
  "parentLocale": "sr-Cyrl"
});
addLocaleData({
  "locale": "sr-Latn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "sr-Latn-BA",
  "parentLocale": "sr-Latn"
});
addLocaleData({
  "locale": "sr-Latn-ME",
  "parentLocale": "sr-Latn"
});
addLocaleData({
  "locale": "sr-Latn-XK",
  "parentLocale": "sr-Latn"
});
addLocaleData({
  "locale": "ss",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ssy",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "st",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "sv",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    if (ord) return (n10 == 1 || n10 == 2) && n100 != 11 && n100 != 12 ? "one" : "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "sv-AX",
  "parentLocale": "sv"
});
addLocaleData({
  "locale": "sv-FI",
  "parentLocale": "sv"
});
addLocaleData({
  "locale": "sw",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "sw-CD",
  "parentLocale": "sw"
});
addLocaleData({
  "locale": "sw-KE",
  "parentLocale": "sw"
});
addLocaleData({
  "locale": "sw-UG",
  "parentLocale": "sw"
});
addLocaleData({
  "locale": "syr",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ta",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ta-LK",
  "parentLocale": "ta"
});
addLocaleData({
  "locale": "ta-MY",
  "parentLocale": "ta"
});
addLocaleData({
  "locale": "ta-SG",
  "parentLocale": "ta"
});
addLocaleData({
  "locale": "te",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "teo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "teo-KE",
  "parentLocale": "teo"
});
addLocaleData({
  "locale": "th",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "ti",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 0 || n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ti-ER",
  "parentLocale": "ti"
});
addLocaleData({
  "locale": "tig",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "tk",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "tl",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        f = s[1] || "",
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    if (ord) return n == 1 ? "one" : "other";
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "tn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "to",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "tr",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "tr-CY",
  "parentLocale": "tr"
});
addLocaleData({
  "locale": "ts",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "twq",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "tzm",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        t0 = Number(s[0]) == n;
    if (ord) return "other";
    return n == 0 || n == 1 || t0 && n >= 11 && n <= 99 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ug",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "uk",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        i = s[0],
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    if (ord) return n10 == 3 && n100 != 13 ? "few" : "other";
    return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
  }
});
addLocaleData({
  "locale": "ur",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "ur-IN",
  "parentLocale": "ur"
});
addLocaleData({
  "locale": "uz",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "uz-Arab",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "uz-Cyrl",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "uz-Latn",
  "parentLocale": "uz"
});
addLocaleData({
  "locale": "vai",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "vai-Latn",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "vai-Vaii",
  "parentLocale": "vai"
});
addLocaleData({
  "locale": "ve",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "vi",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return n == 1 ? "one" : "other";
    return "other";
  }
});
addLocaleData({
  "locale": "vo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "vun",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "wa",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 0 || n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "wae",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "wo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "xh",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "xog",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n == 1 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "yav",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "yi",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    var s = String(n).split("."),
        v0 = !s[1];
    if (ord) return "other";
    return n == 1 && v0 ? "one" : "other";
  }
});
addLocaleData({
  "locale": "yo",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "yo-BJ",
  "parentLocale": "yo"
});
addLocaleData({
  "locale": "zgh",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "zh",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "zh-Hans",
  "parentLocale": "zh"
});
addLocaleData({
  "locale": "zh-Hans-HK",
  "parentLocale": "zh-Hans"
});
addLocaleData({
  "locale": "zh-Hans-MO",
  "parentLocale": "zh-Hans"
});
addLocaleData({
  "locale": "zh-Hans-SG",
  "parentLocale": "zh-Hans"
});
addLocaleData({
  "locale": "zh-Hant",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return "other";
  }
});
addLocaleData({
  "locale": "zh-Hant-HK",
  "parentLocale": "zh-Hant"
});
addLocaleData({
  "locale": "zh-Hant-MO",
  "parentLocale": "zh-Hant-HK"
});
addLocaleData({
  "locale": "zu",
  "pluralRuleFunction": function pluralRuleFunction(n, ord) {
    if (ord) return "other";
    return n >= 0 && n <= 1 ? "one" : "other";
  }
});