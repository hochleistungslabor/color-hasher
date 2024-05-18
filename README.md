# ColorHasher

ColorHasher is a simple NPM package that converts a string into a unique HSL (Hue, Saturation, Lightness) color representation.
This can be useful for generating consistent colors for strings, such as user names, identifiers, or any other string data.

## Installation

User npm to install ColorHasher:

```bash
npm install @hochleistungslabor/color-hasher
```

## Usage

The package provides two main functions:

- `stringToHSLValues(str: string): HSL` - Converts a string to an HSL object.
- `stringToHSL(str: string): string` - Converts a string to an HSL string.

## Example

```js
import {
  stringToHSL,
  stringToHSLValues,
} from "@hochleistungslabor/color-hasher";
const exampleString = "example";

// Get HSL object
const hslValues = stringToHSLValues(exampleString);
console.log(hslValues);
// Output: { hue: X, saturation: Y, lightness: Z }

// Get HSL string
const hslString = stringToHSL(exampleString);
console.log(hslString);
// Output: hsl(X, Y%, Z%)
```

## API

### `stringToHSLValues(str: string): HSL`

Converts a given string into an HSL object.

- Parameters:
  - `str` (string): The input string to convert.
- Returns:
  - `HSL`: An object containing computed hue, saturation, and lightness properties.

### `stringToHSL(str: string): string`

Converts a given string into an HSL string.

- Parameters:
  - `str` (string): The input string to convert.
- Returns:
  - `string`: A string representing the HSL color, formatted as `hsl(hue, saturation%, lightness%)`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.
