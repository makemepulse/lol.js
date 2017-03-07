'use strict'

function email(email) {
  if (!isString(email)) return false
  if (empty(email)) return false
  if (email.match(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/g) === null) return false
  return true
}

function min(string, min) {
  if (typeof string === "number") return string >= min
  return string.length >= min
}

function max(string, max) {
  if (typeof string === "number") return string <= max
  return string.length <= max
}

function length(string, len) {
  return equal(string.length === len)
}

function equal(value, equalValue) {
  return value === equalValue
}

function empty(value) {
  var valid = false

  if (typeof value === "undefined") valid = true
  if (value === null) valid = true
  if (typeof value === "number" && isNaN(value)) valid = true
  if (!valid && value.length === 0) valid = true

  return valid
}

function isset(value) {
  return !empty(value)
}

function optional() {
  return true
}

function isUndefined(value) {
  return typeof value === 'undefined'
}

function isNull(value) {
  return value === null
}

function isString(value) {
  return typeof value === 'string' && isset(value)
}

function isNumber(value) {
  var v = parseInt(value)
  return typeof v === 'number' && !isNaN(v)
}

function isBoolean(value) {
  return typeof value === 'boolean'
}

module.exports = {
  email: email,
  min: min,
  max: max,
  length: length,
  optional: optional,
  isUndefined: isUndefined,
  isNull: isNull,
  isString: isString,
  isNumber: isNumber,
  isBoolean: isBoolean
}
