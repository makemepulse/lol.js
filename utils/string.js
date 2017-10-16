'use string'

function _TEMPLATE_REGEX( key ) {
  return new RegExp("\\$\\{"+key+"\\}", 'g')
}

function _TEMPLATE_ESCAPE_REGEX(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

var TRIM_SPACE_REGEX = new RegExp('(^\\s+|\\s+$)', 'g')

/**
 * Interpolate string with the object
 *
 * @param {String} string
 * @param {Object} obj
 * @returns {String}
 */
function template( string, obj, regex ) {

  obj = obj || {}
  var value, str = string

  for (var key in obj) {
    value = obj[key]
    str   = str.replace( regex ? regex(key) : _TEMPLATE_REGEX(key), value )
  }

  return str

}

/**
 * Interpolate string with the object
 *
 * @param {String} string
 * @param {Object} obj
 * @param {Object} options
 * @param {String} options.open
 * @param {String} options.body
 * @param {String} options.close
 * @returns {String}
 */
function template2( string, obj, options ) {

  obj = obj || {}
  options = Object.assign({
    open: '${',
    body: '[a-z@$#-_?!]+',
    close: '}'
  }, options || {})
  var value, str = string

  var matches  = str.match(new RegExp(
    _TEMPLATE_ESCAPE_REGEX(options.open) +
    options.body +
    _TEMPLATE_ESCAPE_REGEX(options.close)
  , 'g')) || []

  var nmatches = matches.map(function(m) { return '' })

  for (var key in obj) {
    value = obj[key]

    if (typeof value === 'string') {
      nmatches = nmatches.map(function(m, index) {
        if (matches[index].match(new RegExp(key))) {
          var s = matches[index].replace( key, value )
          return s.slice(options.open.length, s.length-options.close.length)
        }

        return m
      })
    }
  }

  matches.forEach(function(m, index) {
    str = str.replace(m, nmatches[index])
  })

  return str

}

/**
 * Remove white spaces at the beginning and at the end of the string
 *
 * @export
 * @param {String} str
 * @returns {String}
 */
function trimWhiteSpace(str) {
  return str.replace(TRIM_SPACE_REGEX, '')
}


/**
 * Append or preprend a character to a string
 *
 * @export
 * @param {String} str
 * @param {Integer} limit
 * @param {String} char
 * @param {Boolean} [insertAfter]
 * @returns {String}
 */
function pad(str, limit, char, insertAfter) {
  var s = str.toString()

  if (s.length < limit) {
    if (insertAfter) s = char + s
    else s = s + char

    return pad(s, limit, char, insertAfter)
  }

  return s
}



/**
 * Slug string
 *
 * @export
 * @param {String} str
 * @returns {String}
 */
function toSlug(str) {
  return str.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}


/**
 * Camel case
 *
 * @export
 * @param {String} str
 * @returns {String}
 */
function toCamelCase(str) {
  str = toSlug(str)

  var words = str.split('-').map(function(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1)
  })

  return words.join('')
}


/**
 * Slugify a string and replace tiret to underscore
 *
 * @param {String} str
 * @returns {String}
 */
function toUnderscore(str) {
  return toSlug(str).replace(/-+/, '_')
}

function toCapitalize(str) {
  var strs = str.split(/\s/g)
  strs = strs.map(function(s) {
    return s[0].toUpperCase() + s.slice(1).toLowerCase()
  })
  return strs.join(' ')
}

module.exports = {
  template: template,
  template2: template2,
  trimWhiteSpace: trimWhiteSpace,
  pad: pad,
  toSlug: toSlug,
  toCamelCase: toCamelCase,
  toUnderscore: toUnderscore,
  toCapitaliz: toCapitalize
}