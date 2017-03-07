'use strict'

var CSS_REGEX = /^rgba|^rgb|\(|\)|\s/gi

/**
 * Hexadecimal String to RGBA
 *
 * @param {String} str
 * @param {Boolean} normalized
 *
 */
function HexStringToRGBA(str, normalized) {
  var split = str.match(/.{2}/g)

  var res = []

  for (var i = 0, ilen = split.length; i < ilen; i++) {
    res[i] = HexStringToHex(split[i])
    res[i] = normalized ? res[i] / 255 : res[i]
  }

  return res
}


/**
 * Convert string to hexadecimal value
 *
 * @param {String} str
 * @returns {Integer}
 */
function HexStringToHex(str) {
  return parseInt(str, 16)
}


/**
 * Hexadecimal String to CSS style
 *
 * @param {String} str - Hexadecimal in string
 *
 * @return {String} - CSS color
 *
 */
function HexStringToCSS(str) {
  return RGBAToCSS(HexStringToRGBA(str, false))
}


/**
 * Convert hexadecimal to string
 *
 * @param {Integer} hex - Hexadecimal value
 * @returns {String}
 */
function HexToHexString(hex) {
  return hex.toString(16)
}


/**
 * Hexadecimal to RGBA
 *
 * @param {Integer} hex - Hexadecimal value
 * @param {Boolean} normalized - True for a value between 0-1
 *
 * @return {Array} - RGB or RGBA array
 *
 */
function HexToRGBA(hex, normalized) {
  return HexStringToRGBA(HexToHexString(hex), normalized)
}


/**
 * Hexadecimal to CSS style
 *
 * @param {Integer} hex - Hexadecimal value
 *
 * @return {String} - CSS color
 *
 */
function HexToCSS(hex) {
  return RGBAToCSS(HexToRGBA(hex))
}


/**
 * RGBA to Hexadecimal
 *
 * @param {Array} rgba - RGB or RGBA array
 *
 * @return {Integer} - Hexadecimal value
 *
 */
function RGBAToHex(rgba) {
  return HexStringToHex(RGBAToHexString(rgba))
}


/**
 * RGBA to Hexadecimal String
 *
 * @param {Array} rgba - RGB or RGBA array
 *
 * @return {String} - Hexadecimal value in String
 *
 */
function RGBAToHexString(rgba) {
  var str = ''

  for (var i = 0, ilen = rgba.length; i < ilen; i++) {
    str += HexToHexString(rgba[i])
  }

  return str
}


/**
 * RGBA to CSS style
 *
 * @param {Array} rgba - RGB or RGBA array
 *
 * @return {String} - CSS Color
 *
 */
function RGBAToCSS(rgba) {
  var alpha = rgba[3] >= 0 ? rgba[3] / 255 : 1
  return 'rgba('+rgba[0]+', '+rgba[1]+', '+rgba[2]+', '+alpha+')'
}


/**
 * CSS to RGBA style
 *
 * @param {String} str - CSS string
 *
 * @returns {Array} - RGB or RGBA array
 *
 */
function CSSToRGBA(str, normalized) {
  var arr = str.replace(CSS_REGEX, '').split(',')
  var res = [ 0, 0, 0, 1 ]

  for (var i = 0, ilen = arr.length; i < ilen; i++) {
    if (i < 3) {
      res[i] = parseInt(arr[i])
      res[i] = normalized ? res[i] / 255 : res[i]
    } else {
      res[i] = parseFloat(arr[i])
      res[i] = normalized ? res[i] : parseInt(res[i] * 255)
    }
  }

  return res
}


/**
 * CSS to Hexadecimal String
 *
 * @param {String} str - CSS string
 *
 * @returns {String} - Hexadecimal string
 *
 */
function CSSToHexString(str) {
  return RGBAToHexString(CSSToRGBA(str, false))
}


/**
 * CSS to hexadecimal value
 *
 * @param {String} str - CSS string
 *
 * @returns {Integer} - Hexadecimal value
 */
function CSSToHex(str) {
  return RGBAToHex(CSSToRGBA(str, false))
}



/**
 * Interpolation between two colors
 *
 * @param {Array} out - Destination
 * @param {Array} from - Color in
 * @param {Array} to - Color out
 * @param {Number} t - Value between 0 and 1
 *
 * @return {Array} out
 *
 */
function InterpolateRGBA(out, from, to, t) {
  out[0] = parseInt(from[0] + (to[0] - from[0]) * t)
  out[1] = parseInt(from[1] + (to[1] - from[1]) * t)
  out[2] = parseInt(from[2] + (to[2] - from[2]) * t)

  if (!isNaN(from[3] + to[3])) {
    out[3] = parseInt(from[3] + (to[3] - from[3]) * t)
  }

  return out
}


var EXPORTS = {
  HexStringToHex: HexStringToHex,
  HexStringToRGBA: HexStringToRGBA,
  HexStringToCSS: HexStringToCSS,

  HexToHexString: HexToHexString,
  HexToRGBA: HexToRGBA,
  HexToCSS: HexToCSS,

  RGBAToHexString: RGBAToHexString,
  RGBAToHex: RGBAToHex,
  RGBAToCSS: RGBAToCSS,

  CSSToHexString: CSSToHexString,
  CSSToHex: CSSToHex,
  CSSToRGBA: CSSToRGBA,

  InterpolateRGBA: InterpolateRGBA,
}

module.exports = EXPORTS