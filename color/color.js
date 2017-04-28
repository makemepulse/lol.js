'use strict'

var TYPES = [ 'Hex', 'HexInteger', 'RGBA', 'Float', 'CSS' ]

var CSS_REGEX = /^rgba|^rgb|\(|\)|\s/gi
var NO_HEXA   = /[^a-f0-9]/gi

/**
 *
 * @typedef {Number}    Integer — Integer
 * @typedef {Number}    Float — Float
 * @typedef {Integer[]} RGBA — Array of integers
 * @typedef {String}    Hex — Hexadecimal in string
 * @typedef {Integer}   HexInteger — Hexadecimal
 * @typedef {String}    CSS — CSS String
 *
 * @typedef  {Object}  TestObject
 * @property {String}  CSS - CSS String
 * @property {RGBA}    RGBA - RGBA Array
 * @property {Float[]} Float - Float Array
 * @property {Integer} Hex - Hexadecimal value
 * @property {String}  Hex - Hexadecimal string
 */


/**
 * Hexadecimal string to RGBA
 * @memberof Color
 *
 * @param {Hex} str
 * @param {RGBA} out
 */
function HexToRGBA(str, out) {
  var split = str.replace(NO_HEXA, '').match(/.{2}/g)

  for (var i = 0, ilen = split.length; i < ilen; i++) {
    out[i] = HexToHexInteger(split[i])
  }

  return out
}


/**
 * Hexadecimal string to Float[]
 * @memberof Color
 *
 * @param {Hex} str
 * @returns {Float[]}
 */
function HexToFloat(str, out) {
  return RGBAToFloat(HexToRGBA(str.replace(NO_HEXA, ''), out), out)
}


/**
 * Hexadecimal string to hexadecimal
 * @memberof Color
 *
 * @param {Hex} str
 * @returns {Hex}
 */
function HexToHexInteger(str) {
  return parseInt(str.replace(NO_HEXA, ''), 16)
}


/**
 * Hexadecimal string to CSS
 * @memberof Color
 *
 * @param {Hex} str
 * @return {CSS}
 */
function HexToCSS(str) {
  return RGBAToCSS(HexToRGBA(str.replace(NO_HEXA, ''), []))
}


/**
 * RGBA to Hexadecimal
 * @memberof Color
 *
 * @param {RGBA} rgba
 * @return {Hex}
 */
function RGBAToHexInteger(rgba) {
  return HexToHexInteger(RGBAToHex(rgba))
}


/**
 * RGBA to Hexadecimal string
 * @memberof Color
 *
 * @param {RGBA} rgba
 * @return {Hex}
 */
function RGBAToHex(rgba) {
  var str = ''

  for (var i = 0, res, ilen = rgba.length; i < ilen; i++) {
    res = rgba[i].toString(16)
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
  if (rgba[3] >= 0) {
    return 'rgba('+rgba[0]+', '+rgba[1]+', '+rgba[2]+', '+(rgba[3] / 255)+')'
  }

  return 'rgb('+rgba[0]+', '+rgba[1]+', '+rgba[2]+')'
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
 * @returns {Hex}
 */
function CSSToHex(str) {
  return RGBAToHex(CSSToRGBA(str, []))
}


/**
 * CSS to hexadecimal value
 * @memberof Color
 *
 * @param {CSS} str
 * @returns {Hex}
 */
function CSSToHexInteger(str) {
  return RGBAToHexInteger(CSSToRGBA(str, []))
}


/**
 * Floats to RGBA
 *
 * @param {Float[]} floats
 * @param {RGBA} out
 * @returns {RGBA}
 */
function FloatToRGBA(floats, out) {
  out[0] = Math.round(floats[0] * 255)
  out[1] = Math.round(floats[1] * 255)
  out[2] = Math.round(floats[2] * 255)
  if (floats[3] >= 0) out[3] = Math.round(floats[3] * 255)

  return out
}


/**
 * Floats to hexadecimal value
 * @memberof Color
 *
 * @param {Float[]} floats
 * @returns {Hex}
 */
function FloatToHexInteger(floats) {
  return RGBAToHexInteger(FloatToRGBA(floats, []))
}


/**
 * Floats to hexadecimal string
 * @memberof Color
 *
 * @param {Float[]} floats
 * @returns {Hex}
 */
function FloatToHex(floats) {
  return RGBAToHex(FloatToRGBA(floats, []))
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
      HexInteger: 0xff0000ff,
      Hex: 'ff0000ff'
    }
  }

  var isValid = true

  TYPES.forEach(function(type0) {
    TYPES.forEach(function(type1) {
      if (type0 !== type1 && EXPORTS[type0]['from'+type1]) {
        var res   = EXPORTS[type0]['from'+type1]( values[type1], [] )
        var valid = res === values[type0]

        if (Array.isArray(res)) {
          valid = res.join(',') === values[type0].join(',')
        }

        if (!valid) {
          console.log( type1 + 'To' + type0, valid, res, values[type0] )
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
  HexInteger: {
    fromHex: HexToHexInteger,
    fromFloat: FloatToHexInteger,
    fromRGBA: RGBAToHexInteger,
    fromCSS: CSSToHexInteger,
  },

  Hex: {
    toHexInteger: HexToHexInteger,
    toRGBA: HexToRGBA,
    toCSS: HexToCSS,
    toFloat: HexToFloat,

    fromFloat: FloatToHex,
    fromRGBA: RGBAToHex,
    fromCSS: CSSToHex,
  },

  Float: {
    toHex: FloatToHex,
    toHexInteger: FloatToHexInteger,
    toRGBA: FloatToRGBA,
    toCSS: FloatToCSS,

    fromHex: HexToFloat,
    fromRGBA: RGBAToFloat,
    fromCSS: CSSToFloat,
  },

  RGBA: {
    toHex: RGBAToHex,
    toHexInteger: RGBAToHexInteger,
    toCSS: RGBAToCSS,
    toFloat: RGBAToFloat,

    fromHex: HexToRGBA,
    fromFloat: FloatToRGBA,
    fromCSS: CSSToRGBA,
  },

  CSS: {
    toHex: CSSToHex,
    toHexInteger: CSSToHexInteger,
    toRGBA: CSSToRGBA,
    toFloat: CSSToFloat,

    fromHex: HexToCSS,
    fromFloat: FloatToCSS,
    fromRGBA: RGBAToCSS,
  },

  InterpolateRGBA: InterpolateRGBA,
  InterpolateFloat: InterpolateFloat,

  testUnits: testUnits
}

module.exports = EXPORTS