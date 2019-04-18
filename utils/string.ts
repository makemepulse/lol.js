function _TEMPLATE_REGEX( key: string ) {
  return new RegExp("\\$\\{"+key+"\\}", 'g')
}

function _TEMPLATE_ESCAPE_REGEX(str: string) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

const TRIM_SPACE_REGEX = new RegExp('(^\\s+|\\s+$)', 'g')

interface Template2Options {
  open: string
  close: string
  body: string
}

const Template2DefaultOptions: Template2Options = {
  open: '${',
  body: '[a-z@$#-_?!]+',
  close: '}'
}

/**
 * Interpolate string with the object
 */
export function template( string: string, obj: any = {}, regex: (key: string) => RegExp = _TEMPLATE_REGEX ) {
  let value: any, str = string

  for (let key in obj) {
    value = obj[key]
    str   = str.replace( regex(key), value )
  }

  return str
}

/**
 * Interpolate string with the object
 */
export function template2( string: string, obj: any = {}, options: Template2Options = Template2DefaultOptions ) {
  options = Object.assign({
    open: '${',
    body: '[a-z@$#-_?!]+',
    close: '}'
  }, options)

  var value: any, str = string

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
 */
export function trimWhiteSpace(str: string) {
  return str.replace(TRIM_SPACE_REGEX, '')
}


/**
 * Append or preprend a character to a string
 */
export function pad(str: string, limit: number = 2, char: string = "0", insertAfter: boolean = false) : string {
  var s = str.toString()

  if (s.length < limit) {
    if (insertAfter) s = s + char
    else s = char + s

    return pad(s, limit, char, insertAfter)
  }

  return s
}



/**
 * Slug string
 */
export function toSlug(str: string) {
  return str.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}


/**
 * Camel case
 */
export function toCamelCase(str: string) {
  str = toSlug(str)

  var words = str.split('-').map(function(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1)
  })

  return words.join('')
}


/**
 * Slugify a string and replace tiret to underscore
 */
export function toUnderscore(str: string) {
  return toSlug(str).replace(/-+/, '_')
}

/**
 * Capitalize
 */
export function toCapitalize(str: string) {
  var strs = str.split(/\s/g)
  strs = strs.map(function(s) {
    return s[0].toUpperCase() + s.slice(1).toLowerCase()
  })
  return strs.join(' ')
}

/**
 * Capitalize first letter
 */
export function toUCFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Generate version from datetime
 */
export function generateVersionFromDate() {
  const now = new Date()

  const date = pad(now.getDate() + "", 2, "0")
  const month = pad((now.getMonth()+1) + "", 2, "0")
  const year = pad(now.getFullYear() + "", 4, "0")
  const hours = pad(now.getHours() + "", 2, "0")
  const minutes = pad(now.getMinutes() + "", 2, "0")
  const seconds = pad(now.getSeconds() + "", 2, "0")

  return `${year}-${month}-${date}_${hours}-${minutes}-${seconds}`
}