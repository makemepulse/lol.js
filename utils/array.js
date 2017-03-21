'use strict'

/**
 * Shuffle an array
 *
 * @param {Array} arr
 *
 * @returns {Array}
 *
 */
function shuffle(arr) {
  var length = arr.length
  var tmp, rand

  while (length != 0) {
    rand = Math.floor(Math.random() * length)
    length--
    tmp         = arr[length]
    arr[length] = arr[rand]
    arr[rand]   = tmp
  }

  return arr
}


/**
 * Sort array
 *
 * @param {Array} arr - Array to sort
 *
 * @returns {Array} Sorted array
 *
 */
function sort(arr) {
  var tmp       = []
  var currIndex = -1
  var tm        = -1

  for (var i = 0, ilen = arr.length; i < ilen; i++) {

    currIndex = tmp.length
    tmp[currIndex] = arr[i]

    for (var j = 0, jlen = tmp.length; j < jlen; j++) {
      if (tmp[currIndex] < tmp[j]) {
        tm             = tmp[j]
        tmp[j]         = tmp[currIndex]
        tmp[currIndex] = tm
      }
    }

  }

  return tmp
}

/**
 * Sort array relative to object key
 *
 * @param {Array} arr - Array to sort
 * @param {String} key - Object key
 *
 * @returns {Array} Sorted array
 *
 */
function sortObjects(arr, key) {
  var tmp       = []
  var currIndex = -1
  var tm        = -1

  for (var i = 0, ilen = arr.length; i < ilen; i++) {

    currIndex = tmp.length
    tmp[currIndex] = arr[i]

    for (var j = 0, jlen = tmp.length; j < jlen; j++) {
      if (tmp[currIndex][key] < tmp[j][key]) {
        tm             = tmp[j]
        tmp[j]         = tmp[currIndex]
        tmp[currIndex] = tm
      }
    }

  }

  return tmp
}

/**
 * Inverse array
 *
 * @param {Array} arr
 *
 * @returns {Array}
 *
 */
function inverse(arr) {
  var tmp = []

  for(var ilen = arr.length-1, i = ilen; i >= 0; i--) {
    tmp.push(arr[i])
  }

  return tmp
}


/**
 * Remove duplicates
 *
 * @param {Array} arr
 *
 * @returns {Array}
 *
 */
function unique(arr) {

  var tmp = []

  for (var i = 0, ilen = arr.length; i < ilen; i++) {
    if (tmp.indexOf(arr[i]) === -1) {
      tmp.push(arr[i])
    }
  }

  return tmp

}

module.exports = {
  shuffle: shuffle,
  sort: sort,
  sortObjects: sortObjects,
  inverse: inverse,
  unique: unique
}