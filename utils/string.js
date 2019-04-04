"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _TEMPLATE_REGEX(key) {
    return new RegExp("\\$\\{" + key + "\\}", 'g');
}
function _TEMPLATE_ESCAPE_REGEX(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var TRIM_SPACE_REGEX = new RegExp('(^\\s+|\\s+$)', 'g');
/**
 * Interpolate string with the object
 */
function template(string, obj, regex) {
    if (regex === void 0) { regex = _TEMPLATE_REGEX; }
    obj = obj || {};
    var value, str = string;
    for (var key in obj) {
        value = obj[key];
        str = str.replace(regex(key), value);
    }
    return str;
}
exports.template = template;
/**
 * Interpolate string with the object
 */
function template2(string, obj, options) {
    obj = obj || {};
    options = Object.assign({
        open: '${',
        body: '[a-z@$#-_?!]+',
        close: '}'
    }, options || {});
    var value, str = string;
    var matches = str.match(new RegExp(_TEMPLATE_ESCAPE_REGEX(options.open) +
        options.body +
        _TEMPLATE_ESCAPE_REGEX(options.close), 'g')) || [];
    var nmatches = matches.map(function (m) { return ''; });
    for (var key in obj) {
        value = obj[key];
        if (typeof value === 'string') {
            nmatches = nmatches.map(function (m, index) {
                if (matches[index].match(new RegExp(key))) {
                    var s = matches[index].replace(key, value);
                    return s.slice(options.open.length, s.length - options.close.length);
                }
                return m;
            });
        }
    }
    matches.forEach(function (m, index) {
        str = str.replace(m, nmatches[index]);
    });
    return str;
}
exports.template2 = template2;
/**
 * Remove white spaces at the beginning and at the end of the string
 */
function trimWhiteSpace(str) {
    return str.replace(TRIM_SPACE_REGEX, '');
}
exports.trimWhiteSpace = trimWhiteSpace;
/**
 * Append or preprend a character to a string
 */
function pad(str, limit, char, insertAfter) {
    if (limit === void 0) { limit = 2; }
    if (char === void 0) { char = "0"; }
    if (insertAfter === void 0) { insertAfter = false; }
    var s = str.toString();
    if (s.length < limit) {
        if (insertAfter)
            s = s + char;
        else
            s = s + char;
        return pad(s, limit, char, insertAfter);
    }
    return s;
}
exports.pad = pad;
/**
 * Slug string
 */
function toSlug(str) {
    return str.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}
exports.toSlug = toSlug;
/**
 * Camel case
 */
function toCamelCase(str) {
    str = toSlug(str);
    var words = str.split('-').map(function (word) {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    });
    return words.join('');
}
exports.toCamelCase = toCamelCase;
/**
 * Slugify a string and replace tiret to underscore
 */
function toUnderscore(str) {
    return toSlug(str).replace(/-+/, '_');
}
exports.toUnderscore = toUnderscore;
/**
 * Capitalize
 */
function toCapitalize(str) {
    var strs = str.split(/\s/g);
    strs = strs.map(function (s) {
        return s[0].toUpperCase() + s.slice(1).toLowerCase();
    });
    return strs.join(' ');
}
exports.toCapitalize = toCapitalize;
/**
 * Generate version from datetime
 */
function generateVersionFromDate() {
    var now = new Date();
    var date = pad(now.getDate() + "", 2, "0");
    var month = pad((now.getMonth() + 1) + "", 2, "0");
    var year = pad(now.getFullYear() + "", 4, "0");
    var hours = pad(now.getHours() + "", 2, "0");
    var minutes = pad(now.getMinutes() + "", 2, "0");
    var seconds = pad(now.getSeconds() + "", 2, "0");
    return year + "-" + month + "-" + date + "_" + hours + "-" + minutes + "-" + seconds;
}
exports.generateVersionFromDate = generateVersionFromDate;
