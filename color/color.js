'use strict'

var TYPES = [ 'Hex', 'HexString', 'RGBA', 'Float', 'CSS' ]

var CSS_REGEX = /^rgba|^rgb|\(|\)|\s/gi

/**
 *
 * @typedef {Number}    Integer — Integer
 * @typedef {Number}    Float — Float
 * @typedef {Integer[]} RGBA — Array of integers
 * @typedef {String}    HexString — Hexadecimal in string
 * @typedef {Number}    Hex — Hexadecimal
 * @typedef {String}    CSS — CSS String
 *
 * @typedef  {Object}  TestObject
 * @property {String}  CSS - CSS String
 * @property {RGBA}    RGBA - RGBA Array
 * @property {Float[]} Float - Float Array
 * @property {Integer} Hex - Hexadecimal value
 * @property {String}  HexString - Hexadecimal string
 */

/**
 * Hexadecimal string to RGBA
 * @memberof Color
 *
 * @param {HexString} str
 * @param {RGBA} out
 */
function HexStringToRGBA(str, out) {
  var split = str.match(/.{2}/g)

  for (var i = 0, ilen = split.length; i < ilen; i++) {
    out[i] = HexStringToHex(split[i])
  }

  return out
}


/**
 * Hexadecimal string to Float[]
 * @memberof Color
 *
 * @param {HexString} str
 * @returns {Float[]}
 */
function HexStringToFloat(str, out) {
  return RGBAToFloat(HexStringToRGBA(str, out), out)
}


/**
 * Hexadecimal string to hexadecimal
 * @memberof Color
 *
 * @param {HexString} str
 * @returns {Hex}
 */
function HexStringToHex(str) {
  return parseInt(str, 16)
}


/**
 * Hexadecimal string to CSS
 * @memberof Color
 *
 * @param {HexString} str
 * @return {CSS}
 */
function HexStringToCSS(str) {
  return RGBAToCSS(HexStringToRGBA(str, []))
}


/**
 * Hexadecimal to hexadecimal string
 * @memberof Color
 *
 * @param {Hex} hex
 * @returns {HexString}
 */
function HexToHexString(hex) {
  return hex.toString(16)
}


/**
 * Hexadecimal to RGBA
 * @memberof Color
 *
 * @param {Hex} hex
 * @param {RGBA} out
 * @return {RGBA}
 */
function HexToRGBA(hex, out) {
  return HexStringToRGBA(HexToHexString(hex), out)
}


/**
 * Hexadecimal to Float[]
 * @memberof Color
 *
 * @param {Hex} hex
 * @param {Float[]} out
 * @returns {Float[]}
 */
function HexToFloat(hex, out) {
  return RGBAToFloat(HexToRGBA(hex, out), out)
}


/**
 * Hexadecimal to CSS
 * @memberof Color
 *
 * @param {Hex} hex
 * @return {CSS}
 */
function HexToCSS(hex) {
  return RGBAToCSS(HexToRGBA(hex, []))
}


/**
 * RGBA to Hexadecimal
 * @memberof Color
 *
 * @param {RGBA} rgba
 * @return {Hex}
 */
function RGBAToHex(rgba) {
  return HexStringToHex(RGBAToHexString(rgba))
}


/**
 * RGBA to Hexadecimal string
 * @memberof Color
 *
 * @param {RGBA} rgba
 * @return {HexString}
 */
function RGBAToHexString(rgba) {
  var str = ''

  for (var i = 0, res, ilen = rgba.length; i < ilen; i++) {
    res = HexToHexString(rgba[i])
    res = res.length < 2 ? "0" + res : res
    str += res
  }

  return str
}


/**
 * RGBA to CSS
 * @memberof Color
 *
 * @param {RGBA} rgba
 * @return {CSS}
 */
function RGBAToCSS(rgba) {
  var alpha = rgba[3] >= 0 ? rgba[3] / 255 : 1
  return 'rgba('+rgba[0]+', '+rgba[1]+', '+rgba[2]+', '+alpha+')'
}


/**
 * RGBA to Float[]
 * @memberof Color
 *
 * @param {RGBA} rgba
 * @param {Float[]} out
 * @returns {Float[]}
 */
function RGBAToFloat(rgba, out) {
  out[0] = rgba[0] / 255
  out[1] = rgba[1] / 255
  out[2] = rgba[2] / 255
  if (rgba[3] >= 0) out[3] = rgba[3] / 255

  return out
}


/**
 * CSS to RGBA
 * @memberof Color
 *
 * @param {CSS} str
 * @param {RGBA} out
 * @returns {RGBA}
 */
function CSSToRGBA(str, out) {
  var arr = str.replace(CSS_REGEX, '').split(',')

  for (var i = 0, ilen = arr.length; i < ilen; i++) {
    if (i < 3) {
      out[i] = parseInt(arr[i])
    } else {
      out[i] = parseInt(parseFloat(arr[i]) * 255)
    }
  }

  return out
}


/**
 * CSS to Float[]
 * @memberof Color
 *
 * @param {CSS} str
 * @param {Float[]} out
 * @returns {Float[]}
 */
function CSSToFloat(str, out) {
  var arr = str.replace(CSS_REGEX, '').split(',')

  for (var i = 0, ilen = arr.length; i < ilen; i++) {
    if (i < 3) {
      out[i] = parseInt(arr[i]) / 255
    } else {
      out[i] = parseFloat(arr[i])
    }
  }

  return out
}


/**
 * CSS to Hexadecimal
 * @memberof Color
 *
 * @param {CSS} str
 * @returns {HexString}
 */
function CSSToHexString(str) {
  return RGBAToHexString(CSSToRGBA(str, []))
}


/**
 * CSS to hexadecimal value
 * @memberof Color
 *
 * @param {CSS} str
 * @returns {Hex}
 */
function CSSToHex(str) {
  return RGBAToHex(CSSToRGBA(str, []))
}


/**
 * Floats to RGBA
 *
 * @param {Float[]} floats
 * @param {RGBA} out
 * @returns {RGBA}
 */
function FloatToRGBA(floats, out) {
  out[0] = parseInt(floats[0] * 255)
  out[1] = parseInt(floats[1] * 255)
  out[2] = parseInt(floats[2] * 255)
  if (floats[3] >= 0) out[3] = parseInt(floats[3] * 255)

  return out
}


/**
 * Floats to hexadecimal value
 * @memberof Color
 *
 * @param {Float[]} floats
 * @returns {Hex}
 */
function FloatToHex(floats) {
  return RGBAToHex(FloatToRGBA(floats, []))
}


/**
 * Floats to hexadecimal string
 * @memberof Color
 *
 * @param {Float[]} floats
 * @returns {HexString}
 */
function FloatToHexString(floats) {
  return RGBAToHexString(FloatToRGBA(floats, []))
}


/**
 * Floats to CSS
 * @memberof Color
 *
 * @param {Float[]} floats
 * @returns {String}
 */
function FloatToCSS(floats) {
  return RGBAToCSS(FloatToRGBA(floats, []))
}


/**
 * Interpolation between two colors
 * @memberof Color
 *
 * @param {RGBA[]} out - Destination
 * @param {RGBA[]} from - Color in
 * @param {RGBA[]} to - Color out
 * @param {Number} t - Value between 0 and 1
 * @returns {RGBA[]} out
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


/**
 * Interpolation between two colors
 * @memberof Color
 *
 * @param {Float[]} out - Destination
 * @param {Float[]} from - Color in
 * @param {Float[]} to - Color out
 * @param {Float} t - Value between 0 and 1
 * @returns {Float[]} out
 */
function InterpolateFloat(out, from, to, t) {
  out[0] = from[0] + (to[0] - from[0]) * t
  out[1] = from[1] + (to[1] - from[1]) * t
  out[2] = from[2] + (to[2] - from[2]) * t

  if (!isNaN(from[3] + to[3])) {
    out[3] = from[3] + (to[3] - from[3]) * t
  }

  return out
}


/**
 * Test units
 * @memberof Color
 *
 * @param {TestObject} values
 */
function testUnits(values) {
  if (!values) {
    values = {
      CSS: 'rgba(255, 0, 0, 1)',
      RGBA: [ 255, 0, 0, 255 ],
      Float: [ 1, 0, 0, 1 ],
      Hex: 0xff0000ff,
      HexString: 'ff0000ff'
    }
  }

  var isValid = true

  TYPES.forEach(function(type0) {
    TYPES.forEach(function(type1) {
      if (type0 !== type1) {
        var res   = EXPORTS[type0]['from'+type1]( values[type1], [] )
        var valid = res === values[type0]

        if (Array.isArray(res)) {
          valid = res.join(',') === values[type0].join(',')
        } else if (typeof res === 'string' && res.match(/rgba\(/) && values[type0].match(/rgb\(/)) {
          var split = res.replace(CSS_REGEX, '').split(',')
          valid = 'rgb('+split[0]+', '+split[1]+', '+split[2]+')' === values[type0]
        }

        if (!valid) {
          console.log( type0 + 'To' + type1, valid, res, values[type0] )
          isValid = false
        }
      }
    })
  })

  if (isValid) {
    console.log('[Color] Everything is valid')
  }
}

/**
 * @export
 */
var EXPORTS = {
  Hex: {
    toHexString: HexToHexString,
    toRGBA: HexToRGBA,
    toCSS: HexToCSS,
    toFloat: HexToFloat,

    fromHexString: HexStringToHex,
    fromFloat: FloatToHex,
    fromRGBA: RGBAToHex,
    fromCSS: CSSToHex,
  },

  HexString: {
    toHex: HexStringToHex,
    toRGBA: HexStringToRGBA,
    toCSS: HexStringToCSS,
    toFloat: HexStringToFloat,

    fromHex: HexToHexString,
    fromFloat: FloatToHexString,
    fromRGBA: RGBAToHexString,
    fromCSS: CSSToHexString,
  },

  Float: {
    toHexString: FloatToHexString,
    toHex: FloatToHex,
    toRGBA: FloatToRGBA,
    toCSS: FloatToCSS,

    fromHex: HexToFloat,
    fromHexString: HexStringToFloat,
    fromRGBA: RGBAToFloat,
    fromCSS: CSSToFloat,
  },

  RGBA: {
    toHexString: RGBAToHexString,
    toHex: RGBAToHex,
    toCSS: RGBAToCSS,
    toFloat: RGBAToFloat,

    fromHex: HexToRGBA,
    fromHexString: HexStringToRGBA,
    fromFloat: FloatToRGBA,
    fromCSS: CSSToRGBA,
  },

  CSS: {
    toHexString: CSSToHexString,
    toHex: CSSToHex,
    toRGBA: CSSToRGBA,
    toFloat: CSSToFloat,

    fromHex: HexToCSS,
    fromHexString: HexStringToCSS,
    fromFloat: FloatToCSS,
    fromRGBA: RGBAToCSS,
  },

  InterpolateRGBA: InterpolateRGBA,
  InterpolateFloat: InterpolateFloat,

  testUnits: testUnits
}

module.exports = EXPORTS