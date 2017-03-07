'use string'

function _TEMPLATE_REGEX( key ) {
  return new RegExp("\\$\\{"+key+"\\}", 'g')
}

/**
 * Insert character before/after a string
 *
 * @param {String} value
 * @param {Integer} max
 * @param {String} character
 * @param {Boolean} after
 * @returns {String}
 */
function pad(value, max, character, after) {
  if (value === undefined) return ''

  var s = value.toString()

  return s.length < max ? pad(!!after ? value+character : character+value, max, character, after) : s
}

/**
 * Interpolate string with the object
 *
 * @param {String} string
 * @param {Object} obj
 * @returns {String}
 */
function template( string, obj ) {

  var value, str = string

  for (var key in obj) {
    value = obj[key]
    str   = str.replace( _TEMPLATE_REGEX(key), value )
  }

  return str

}

module.exports = {
  pad: pad,
  template: template
}