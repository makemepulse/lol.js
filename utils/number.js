"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI2 = Math.PI * 2;
exports.RAG2DEG = 180 / Math.PI;
exports.DEG2RAD = Math.PI / 180;
/**
 * Clamp a value
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}
exports.clamp = clamp;
/**
 * Clamp a value
 */
function clamp01(value, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return Math.max(min, Math.min(value, max));
}
exports.clamp01 = clamp01;
/**
 * Radian to Degree
 */
function toDegree(radian) {
    return radian / exports.RAG2DEG;
}
exports.toDegree = toDegree;
/**
 * Degree to Radian
 */
function toRadian(degree) {
    return degree / exports.DEG2RAD;
}
exports.toRadian = toRadian;
/**
 * Set float precision
 */
function precision(value, precision) {
    return Math.floor(value * Math.pow(10, precision)) / Math.pow(10, precision);
}
exports.precision = precision;
/**
 * Map value
 */
function map(value, min0, max0, min1, max1) {
    var l0 = max0 - min0;
    var l1 = max1 - min1;
    return min1 + ((value - min0) / l0) * l1;
}
exports.map = map;
