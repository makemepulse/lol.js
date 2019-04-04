"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _merge(obj0, obj1) {
    for (var key in obj1) {
        // Duplicate array and concat
        if (Array.isArray(obj1[key])) {
            obj0[key] = Array.isArray(obj0[key]) ? obj0[key] : [];
            obj0[key] = obj0[key].concat(obj1[key].slice(0));
        }
        // Merge object
        else if (typeof obj1[key] === 'object' && obj1[key] !== null) {
            if (typeof obj0[key] === 'object' && obj0[key] !== null) {
                obj0[key] = merge(obj0[key], obj1[key]);
            }
            else {
                obj0[key] = obj1[key];
            }
        }
        // Number / String / Boolean
        else {
            obj0[key] = obj1[key];
        }
    }
    return obj0;
}
/**
 * Merge objects
 */
function merge(obj) {
    var objs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
    }
    var i = 0;
    var len = objs.length;
    for (i = 0; i < len; i++) {
        obj = _merge(obj, objs[i]);
    }
    return obj;
}
exports.merge = merge;
/**
 * Create an object with only property keys
 */
function expose(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var xprt = {};
    for (var i = 0, ilen = keys.length; i < ilen; i++) {
        if (keys[i] && obj.hasOwnProperty(keys[i])) {
            xprt[keys[i]] = obj[keys[i]];
        }
    }
    return xprt;
}
exports.expose = expose;
/**
 * Create a new object without listed property keys
 */
function omit(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var xprt = {};
    for (var key in obj) {
        if (keys.indexOf(key) == -1) {
            xprt[key] = obj[key];
        }
    }
    return xprt;
}
exports.omit = omit;
/**
 * Flatten object to one level
 */
function flat(obj) {
    var xprt = {};
    for (var key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            var children = flat(obj[key]);
            for (var k in children) {
                xprt[key + '.' + k] = children[k];
            }
        }
        else {
            xprt[key] = obj[key];
        }
    }
    return xprt;
}
exports.flat = flat;
/**
 * Transform a flatten object to a deflatten object
 */
function deflat(obj) {
    var xprt = {};
    var i, ilen, keys;
    for (var key in obj) {
        keys = key.split('.');
        for (i = 0, ilen = keys.length; i < ilen; i++) {
            xprt[keys[i]] = xprt[keys[i]] || {};
        }
        xprt[keys[ilen - 1]] = obj[key];
    }
    return xprt;
}
exports.deflat = deflat;
/**
 * Freeze object
 */
function immutable(obj) {
    var propNames = Object.getOwnPropertyNames(obj);
    propNames.forEach(function (name) {
        var prop = obj[name];
        if (typeof prop == 'object' && prop !== null) {
            immutable(prop);
        }
    });
    return Object.isFrozen(obj) ? obj : Object.freeze(obj);
}
exports.immutable = immutable;
