'use strict'

/**
 * Clamp a value
 *
 * @param {Number} value
 * @param {Number} [min=0]
 * @param {Number} [max=1]
 * @returns {Number}
 */
function clamp(value, min, max) {
  if (min === undefined) min = 0
  if (max === undefined) max = 1
  return Math.max(min, Math.min(value, max))
}

/**
 * Radian to Degree
 *
 * @param {Number} radian
 * @returns {Number}
 */
function toDegree(radian) {
  return radian / Math.PI * 180
}

/**
 * Degree to Radian
 *
 * @param {Number} degree
 * @returns {Number}
 */
function toRadian(degree) {
  return degree / 180 * Math.PI
}

/**
 * Set float precision
 *
 * @param {Number} num
 * @param {Number} precision
 * @returns
 */
function precision(num, precision) {
  return parseInt(num * Math.pow(10, precision)) / Math.pow(10, precision)
}

module.exports = {
  clamp: clamp,
  toDegree: toDegree,
  toRadian: toRadian,
  precision: precision
}