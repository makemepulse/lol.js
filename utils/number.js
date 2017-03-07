'use strict'

function clamp(value, min, max) {
  if (min === undefined) min = 0
  if (max === undefined) max = 1
  return Math.max(min, Math.min(value, max))
},

function toDegree(n) {
  return n / Math.PI * 180
}

module.exports = {
  clamp: clamp,
  toDegree: toDegree
}