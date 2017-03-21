'use strict'

const ArrayUtils = require('./array')

function merge(obj0, obj1) {

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

module.exports = {
  merge: merge
}