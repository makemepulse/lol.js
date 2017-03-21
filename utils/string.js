'use string'

function _TEMPLATE_REGEX( key ) {
  return new RegExp("\\$\\{"+key+"\\}", 'g')
}

var TRIM_SPACE_REGEX = new RegExp('(^\\s+|\\s+$)', 'g')

/**
 * Interpolate string with the object
 *
 * @param {String} string
 * @param {Object} obj
 * @returns {String}
 */
function template( string, obj ) {
  obj = obj || {}
  var value, str = string

  for (var key in obj) {
    value = obj[key]
    str   = str.replace( _TEMPLATE_REGEX(key), value )
  }

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
 * Slug string
 *
 * @export
 * @param {String} str
 * @returns {String}
 */
function slug(str) {
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
function camelCase(str) {
  str = slug(str)

  const words = str.split('-').map(function(word) {
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
function underscore(str) {
  return slug(str).replace(/-+/, '_')
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

module.exports = {
  pad: pad,
  template: template,
  trimWhiteSpace: trimWhiteSpace,
  slug: slug,
  camelCase: camelCase,
  underscore: underscore
}