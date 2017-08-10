'use strict'

const ArrayUtils = require('./array')

/**
 * Merge objects, concat array and keep unique value
 *
 * @param {Object} obj0
 * @param {Object} obj1
 * @returns
 */
module.exports.merge = function merge(obj0, obj1) {

  for (var key in obj1) {

    // Concat array and remove duplicates
    if (Array.isArray(obj1[key])) {
      if (Array.isArray(obj0[key])) {
        obj0[key] = obj0[key].concat(obj1[key])
        obj0[key] = ArrayUtils.unique(obj0[key])
      } else {
        obj0[key] = obj1[key]
      }
    }

    // Merge object
    else if (typeof obj1[key] === 'object' && obj1[key] !== null) {
      if (typeof obj0[key] === 'object' && obj0[key] !== null) {
        obj0[key] = merge(obj0[key], obj1[key])
      } else {
        obj0[key] = obj1[key]
      }
    }

    // Number / String / Boolean
    else {
      obj0[key] = obj1[key]
    }

  }

  return obj0

}

module.exports.clone = function clone(obj) {
  var cloneObj = {}

  for (var key in obj) {

    // Clone ray
    if (Array.isArray(obj[key])) {
      cloneObj[key] = obj[key].slice(0)
    }

    // Clone object
    else if (typeof obj[key] === 'object' && obj[key] !== null) {
      cloneObj[key] = clone(obj[key])
    }

    // Copy Number / String / Boolean
    else {
      cloneObj[key] = obj[key]
    }

  }

  return cloneObj
}

module.exports.flatten = function flatten(obj, keys) {

  var xprt = {}

  for (var i = 0, ilen = keys.length; i < ilen; i++) {
    if (keys[i] && obj.hasOwnProperty(keys[i])) {
      xprt[keys[i]] = obj[keys[i]]
    }
  }

  return xprt

}