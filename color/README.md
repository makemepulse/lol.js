# Color

## Format

* **Hex:** `0xffffff`
* **HexString:** `"ffffff"`

* **CSS (rgb):** `rgb(255, 255, 255)`
* **CSS (rgba):** `rgba(255, 255, 255, 1)`

* **RGBA:** `[ 255, 255, 255, 255 ]`
* **RGBA (Normalized):** `[ 1, 1, 1, 1 ]`

## API

### `ColorUtils.HexStringToHex(str)`

* `{String}` **str** - Hexadecimal string

### `ColorUtils.HexStringToRGBA(str, normalized?)`

* `{String}` **str** - Hexadecimal string
* `{Boolean?}` **normalized** - Return values between 0 and 1 (optional)

### `ColorUtils.HexStringToCSS(str)`

* `{String}` **str** - Hexadecimal string

### `ColorUtils.HexToHexString(hex)`

* `{Integer}` **hex** - Hexadecimal value

### `ColorUtils.HexToRGBA(hex)`

* `{Integer}` **hex** - Hexadecimal value

### `ColorUtils.HexToCSS(hex)`

* `{Integer}` **hex** - Hexadecimal value

### `ColorUtils.RGBAToHexString(rgba)`

* `{Array}` **rgba** - RGB or RGBA array

### `ColorUtils.RGBAToHex(rgba)`

* `{Array}` **rgba** - RGB or RGBA array

### `ColorUtils.RGBAToCSS(rgba)`

* `{Array}` **rgba** - RGB or RGBA array

### `ColorsUtils.CSSToHexString(str)`

* `{String}` **str** - CSS string

### `ColorsUtils.CSSToHex(str)`

* `{String}` **str** - CSS string

### `ColorsUtils.CSSToRGBA(str, normalized?)`

* `{String}` **str** - CSS string
* `{Boolean?}` **normalized** - Return values between 0 and 1 (optional)

### `ColorUtils.InterpolateRGBA(out, from, to, t)`

* `{Array}` **out** — Destination
* `{Array}` **from** - Color from
* `{Array}` **from** - Color to
* `{Number}` **t** - Value between 0 and 1