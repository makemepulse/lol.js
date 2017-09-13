'use strict'

const ArrayUtils = require('./array')

function _merge(obj0, obj1) {
  for (var key in obj1) {

    // Duplicate array and override
    if (Array.isArray(obj1[key])) {
      obj0[key] = obj1[key].slice(0)
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

/**
 * Merge objects
 *
 * @returns {Object}
 */
function merge() {
  const objs = Array.prototype.slice.apply(arguments)
  let obj    = objs.shift()

  let i   = 0
  let len = objs.length

  for (i = 0; i < len; i++) {
    obj = _merge(obj, objs[i])
  }

  return obj
}


/**
 * Make a copy of the object
 *
 * @param {Object} obj
 * @returns {Object}
 */
function clone(obj) {
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

/**
 * Create an object with only property keys
 *
 * @param {Object} obj
 * @param {Array} keys
 * @returns {Object}
 */
function expose(obj, keys) {

  var xprt = {}

  for (var i = 0, ilen = keys.length; i < ilen; i++) {
    if (keys[i] && obj.hasOwnProperty(keys[i])) {
      xprt[keys[i]] = obj[keys[i]]
    }
  }

  return xprt

}

/**
 * Flatten object to one level
 *
 * @param {Object} obj
 * @returns
 */
function flatten(obj) {
  var xprt = {}

  for (var key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      var children = flatten(obj[key])
      for (var k in children) {
        xprt[key + '.' + k] = children[k]
      }
    } else {
      xprt[key] = obj[key]
    }
  }

  return xprt
}

function deflat(obj) {
  const xprt = {}

  let i, ilen, keys

  for (const key in obj) {
    keys = key.split('.')

    for (i = 0, ilen = keys.length; i < ilen; i++) {
      xprt[keys[i]] = xprt[keys[i]] || {}
    }

    xprt[keys[ilen-1]] = obj[key]
  }

  return xprt
}

module.exports = { merge, clone, expose, flatten, deflat }