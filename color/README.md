# Color

## Formats

* **HexInteger:** `0xff0000`
* **Hex:** `"ff0000"`
* **CSS (rgb):** `rgb(255, 0, 0)`
* **CSS (rgba):** `rgba(255, 0, 0, 1)`
* **RGB:** `[ 255, 0, 0 ]`
* **RGBA:** `[ 255, 0, 0, 255 ]`
* **Float:** `[ 1, 1, 1, 1 ]`

## API

### `Color.{TYPE}.to{TYPE}(value, out)`

Some examples :

```js
Color.CSS.toHexString('rgba(255, 0, 0, 1)') // => "FF0000FF"
Color.CSS.toHex('rgba(255, 0, 0, 1)')       // => 0xFF0000FF

Color.Float.toRGBA([1, 0, 0])    // => [ 255, 0, 0 ]
Color.Float.toRGBA([1, 0, 0, 1]) // => [ 255, 0, 0, 255 ]

Color.RGBA.toCSS([ 255, 0, 0 ]) // => "rgba(255, 0, 0, 1)"

// etc..
```

### `Color.{TYPE}.from{TYPE}(value, out)`

Some examples :

```js
Color.CSS.fromHexString('FF0000') // => "rgba(255, 0, 0, 1)"
Color.CSS.fromHex(0xFF0000)       // => "rgba(255, 0, 0, 1)"

Color.Float.fromRGBA([ 255, 0, 0 ])      // => [ 1, 0, 0 ]
Color.Float.fromRGBA([ 255, 0, 0, 255 ]) // => [ 1, 0, 0, 1 ]

Color.RGBA.fromCSS('rgb(255, 0, 0)') // => "[ 255, 0, 0 ]"

// etc..
```

### `Color.InterpolateRGBA(out, from, to, t)`

* `{Array}` **out** — Destination
* `{Array}` **from** - Color from
* `{Array}` **from** - Color to
* `{Number}` **t** - Value between 0 and 1

### `Color.InterpolateFloat(out, from, to, t)`

* `{Array}` **out** — Destination
* `{Array}` **from** - Color from
* `{Array}` **from** - Color to
* `{Number}` **t** - Value between 0 and 1