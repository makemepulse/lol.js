'use strict'

module.exports.email = function email(email) {
  if (!isString(email)) return false
  if (empty(email)) return false
  if (email.match(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/g) === null) return false
  return true
}

module.exports.min = function min(string, min) {
  if (typeof string === "number") return string >= min
  return string.length >= min
}

module.exports.max = function max(string, max) {
  if (typeof string === "number") return string <= max
  return string.length <= max
}

module.exports.length = function length(string, len) {
  return equal(string.length === len)
}

module.exports.equal = function equal(value, equalValue) {
  return value === equalValue
}

module.exports.empty = function empty(value) {
  var valid = false

  if (typeof value === "undefined") valid = true
  if (value === null) valid = true
  if (typeof value === "number" && isNaN(value)) valid = true
  if (!valid && value.length === 0) valid = true

  return valid
}

module.exports.isset = function isset(value) {
  return !empty(value)
}

module.exports.optional( = function optional() {
  return true
}

module.exports.isUndefined = function isUndefined(value) {
  return typeof value === 'undefined'
}

module.exports.isNull = function isNull(value) {
  return value === null
}

module.exports.isString = function isString(value) {
  return typeof value === 'string' && isset(value)
}

module.exports.isNumber = function isNumber(value) {
  var v = parseInt(value)
  return typeof v === 'number' && !isNaN(v)
}

module.exports.isBoolean = function isBoolean(value) {
  return typeof value === 'boolean'
}
