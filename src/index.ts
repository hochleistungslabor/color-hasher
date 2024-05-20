export interface ColorHasherHSL {
  /** hue in [0, 360] */
  hue: number;
  /** saturation in [0, 100] */
  saturation: number;
  /** lightness in [0, 100] */
  lightness: number;
}
export interface ColorHasherRGB {
  /** red in [0, 255] */
  red: number;
  /** blue in [0, 255] */
  blue: number;
  /** green in [0, 255] */
  green: number;
}

export interface ColorHashResult {
  /** the HSL representation of the hash color */
  hsl: ColorHasherHSL;
  /** the RGB representation of the hash color */
  rgb: ColorHasherRGB;
  /** the hex string representation of the color (#123456) */
  hex: string;
  /** the luminance of the color */
  luminance: number;
  /** the color's contrast to black */
  contrastWithBlack: number;
  /** the color's contrast to white */
  contrastWithWhite: number;
}

/**
 * Special function to calculate proper modulo
 * @param n the dividend
 * @param m the divisor
 * @returns the remainder of the division of `n` by `m`
 */
export function modulo(n: number, m: number): number {
  return ((n % m) + m) % m;
}

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 */
export function hslToRgb(hsl: ColorHasherHSL): ColorHasherRGB {
  const h = hsl.hue / 360;
  const s = hsl.saturation / 100;
  const l = hsl.lightness / 100;

  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hueToRgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return {
    red: Math.round(r * 255),
    green: Math.round(g * 255),
    blue: Math.round(b * 255),
  };
}

/**
 * calculate the luminance of a color
 * @param rgb the color in RGB
 * @returns luminance in [0,1]
 */
export function calculateLuminance(rgb: ColorHasherRGB): number {
  const { red, green, blue } = rgb;

  const toLinear = (value: number) => {
    const normalized = value / 255;
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  };

  const rLin = toLinear(red);
  const gLin = toLinear(green);
  const bLin = toLinear(blue);

  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
}

/**
 * calculate the contrast ratio of two luminances
 * @param l1 the first luminance
 * @param l2 the second luminance
 * @returns the ratio
 */
function getContrastRatio(l1: number, l2: number): number {
  return (l1 + 0.05) / (l2 + 0.05);
}

/**
 * compute a color hash of a string
 * @param str the string in question
 * @returns the HSL of the color
 */
export function stringHashHSL(str: string): ColorHasherHSL {
  let hash = 0x811c9dc5; // 32-bit FNV offset basis

  // turn the input into a consistent value
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193); // 32-bit FNV prime
  }
  hash = hash >>> 0; // Convert to unsigned 32-bit integer

  // Use the hash to generate the HSL components
  const hue = modulo(hash, 360); // Hue: 0 - 359
  const saturation = 52 + modulo(hash, 49); // Saturation: 52% - 100%
  const lightness = 45 + modulo(hash, 34); // Lightness: 45% - 78%

  return {
    hue,
    saturation,
    lightness,
  };
}

function hexValue(c: number): string {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

/**
 * compute a color hash of a string
 * @param str the string in question
 * @returns the color including some supplemental information
 */
export function colorHash(str: string): ColorHashResult {
  const hsl = stringHashHSL(str);
  const rgb = hslToRgb(hsl);
  const luminance = calculateLuminance(rgb);
  return {
    hsl,
    rgb,
    hex: `#${hexValue(rgb.red)}${hexValue(rgb.green)}${hexValue(rgb.blue)}`,
    luminance,
    contrastWithBlack: getContrastRatio(luminance, 0),
    contrastWithWhite: getContrastRatio(1, luminance),
  };
}
