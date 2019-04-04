"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generate a random string chain
 */
function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}
exports.s4 = s4;
/**
 * Generate a guid
 */
function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}
exports.guid = guid;
