# Utils

## Number

### `clamp(value, min?, max?)`

### `toDegree(n)`

## Array

### `shuffle(arr)`

### `sort(arr)`

### `sortObjects(arr)`

### `inverse(arr)`

## Validators

## GUID

### `s4()`

### `guid()`

## Canvas

### `drawEllipse(ctxn centerX, centerY, width, height)`

## String

### `pad(str, limit, char, insertAfter?)`

```js
/**
 * Append or preprend a character to a string
 *
 * @param {String} str
 * @param {Integer} limit
 * @param {String} char
 * @param {Boolean} [insertAfter]
 *
 * @return {String}
 *
 */

 // Example

 pad("1", 3, "0")
 // -> "001"
```

### `template(string, obj)`

```js
/**
 * Interpolate string with the object
 *
 * @param {String} string
 * @param {Object} obj
 *
 * @returns {String}
 *
 */

 // Example

 template('Hello ${name} !', { name: 'John' })
 // -> "Hello John !"
```

### `trimWhiteSpace(str)`

```js
/**
 * Remove white spaces at the beginning and at the end of the string
 *
 * @param {String} str
 *
 * @returns {String}
 *
 */

 // Example

 trimeWhiteSpace('  Hello World !  ')
 // -> "Hello World"
```

### `slug(str)`

```js
/**
 * Slug string
 *
 * @param {String} str
 *
 * @returns {String}
 *
 */

 // Example

 slug('Hello World')
 // -> "hello-world"
```

```js
/**
 * Camel case
 *
 * @param {String} str
 *
 * @returns {String}
 */

 // Example

 camelCase('hello-world')
 // -> "HelloWorld"
```
