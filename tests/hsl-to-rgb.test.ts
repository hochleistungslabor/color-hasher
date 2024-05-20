import { ColorHasherHSL, ColorHasherRGB, hslToRgb } from "../src";

const knownColors: { hsl: ColorHasherHSL; rgb: ColorHasherRGB }[] = [
  {
    hsl: {
      hue: 168,
      saturation: 55,
      lightness: 57,
    },
    rgb: {
      red: 85,
      green: 206,
      blue: 182,
    },
  },
  {
    hsl: {
      hue: 79,
      saturation: 64,
      lightness: 48,
    },
    rgb: {
      red: 151,
      green: 201,
      blue: 44,
    },
  },
  {
    hsl: {
      hue: 170,
      saturation: 83,
      lightness: 75,
    },
    rgb: {
      red: 138,
      green: 244,
      blue: 227,
    },
  },
  {
    hsl: {
      hue: 354,
      saturation: 98,
      lightness: 55,
    },
    rgb: {
      red: 253,
      green: 28,
      blue: 50,
    },
  },
  {
    hsl: {
      hue: 118,
      saturation: 59,
      lightness: 49,
    },
    rgb: {
      red: 56,
      green: 199,
      blue: 51,
    },
  },
  {
    hsl: {
      hue: 178,
      saturation: 78,
      lightness: 77,
    },
    rgb: {
      red: 151,
      green: 242,
      blue: 239,
    },
  },
  {
    hsl: {
      hue: 260,
      saturation: 69,
      lightness: 73,
    },
    rgb: {
      red: 170,
      green: 139,
      blue: 234,
    },
  },
  {
    hsl: {
      hue: 315,
      saturation: 99,
      lightness: 74,
    },
    rgb: {
      red: 254,
      green: 123,
      blue: 222,
    },
  },
  {
    hsl: {
      hue: 21,
      saturation: 52,
      lightness: 48,
    },
    rgb: {
      red: 186,
      green: 103,
      blue: 59,
    },
  },
  {
    hsl: {
      hue: 35,
      saturation: 56,
      lightness: 54,
    },
    rgb: {
      red: 203,
      green: 149,
      blue: 72,
    },
  },
  {
    hsl: {
      hue: 274,
      saturation: 84,
      lightness: 65,
    },
    rgb: {
      red: 176,
      green: 91,
      blue: 241,
    },
  },
  {
    hsl: {
      hue: 66,
      saturation: 68,
      lightness: 61,
    },
    rgb: {
      red: 210,
      green: 223,
      blue: 88,
    },
  },
  {
    hsl: {
      hue: 56,
      saturation: 93,
      lightness: 51,
    },
    rgb: {
      red: 246,
      green: 231,
      blue: 14,
    },
  },
  {
    hsl: {
      hue: 42,
      saturation: 78,
      lightness: 49,
    },
    rgb: {
      red: 222,
      green: 164,
      blue: 27,
    },
  },
  {
    hsl: {
      hue: 354,
      saturation: 72,
      lightness: 53,
    },
    rgb: {
      red: 221,
      green: 49,
      blue: 66,
    },
  },
  {
    hsl: {
      hue: 118,
      saturation: 58,
      lightness: 47,
    },
    rgb: {
      red: 55,
      green: 189,
      blue: 50,
    },
  },
  {
    hsl: {
      hue: 349,
      saturation: 71,
      lightness: 64,
    },
    rgb: {
      red: 228,
      green: 98,
      blue: 122,
    },
  },
  {
    hsl: {
      hue: 311,
      saturation: 80,
      lightness: 70,
    },
    rgb: {
      red: 240,
      green: 117,
      blue: 217,
    },
  },
  {
    hsl: {
      hue: 171,
      saturation: 58,
      lightness: 52,
    },
    rgb: {
      red: 62,
      green: 204,
      blue: 182,
    },
  },
  {
    hsl: {
      hue: 68,
      saturation: 91,
      lightness: 53,
    },
    rgb: {
      red: 215,
      green: 244,
      blue: 26,
    },
  },
  {
    hsl: {
      hue: 308,
      saturation: 76,
      lightness: 47,
    },
    rgb: {
      red: 211,
      green: 29,
      blue: 187,
    },
  },
  {
    hsl: {
      hue: 238,
      saturation: 73,
      lightness: 71,
    },
    rgb: {
      red: 127,
      green: 131,
      blue: 235,
    },
  },
  {
    hsl: {
      hue: 268,
      saturation: 55,
      lightness: 75,
    },
    rgb: {
      red: 189,
      green: 156,
      blue: 226,
    },
  },
  {
    hsl: {
      hue: 328,
      saturation: 100,
      lightness: 47,
    },
    rgb: {
      red: 240,
      green: 0,
      blue: 128,
    },
  },
  {
    hsl: {
      hue: 237,
      saturation: 64,
      lightness: 56,
    },
    rgb: {
      red: 71,
      green: 78,
      blue: 215,
    },
  },
  {
    hsl: {
      hue: 3,
      saturation: 76,
      lightness: 48,
    },
    rgb: {
      red: 215,
      green: 39,
      blue: 29,
    },
  },
  {
    hsl: {
      hue: 150,
      saturation: 83,
      lightness: 63,
    },
    rgb: {
      red: 82,
      green: 239,
      blue: 161,
    },
  },
  {
    hsl: {
      hue: 259,
      saturation: 83,
      lightness: 58,
    },
    rgb: {
      red: 115,
      green: 59,
      blue: 237,
    },
  },
  {
    hsl: {
      hue: 107,
      saturation: 100,
      lightness: 50,
    },
    rgb: {
      red: 55,
      green: 255,
      blue: 0,
    },
  },
  {
    hsl: {
      hue: 48,
      saturation: 88,
      lightness: 45,
    },
    rgb: {
      red: 216,
      green: 175,
      blue: 14,
    },
  },
  {
    hsl: {
      hue: 174,
      saturation: 76,
      lightness: 61,
    },
    rgb: {
      red: 80,
      green: 231,
      blue: 216,
    },
  },
  {
    hsl: {
      hue: 58,
      saturation: 100,
      lightness: 53,
    },
    rgb: {
      red: 255,
      green: 247,
      blue: 15,
    },
  },
  {
    hsl: {
      hue: 299,
      saturation: 58,
      lightness: 66,
    },
    rgb: {
      red: 217,
      green: 118,
      blue: 219,
    },
  },
  {
    hsl: {
      hue: 21,
      saturation: 63,
      lightness: 56,
    },
    rgb: {
      red: 213,
      green: 122,
      blue: 72,
    },
  },
  {
    hsl: {
      hue: 249,
      saturation: 94,
      lightness: 70,
    },
    rgb: {
      red: 128,
      green: 107,
      blue: 250,
    },
  },
  {
    hsl: {
      hue: 354,
      saturation: 97,
      lightness: 69,
    },
    rgb: {
      red: 253,
      green: 99,
      blue: 115,
    },
  },
  {
    hsl: {
      hue: 157,
      saturation: 59,
      lightness: 58,
    },
    rgb: {
      red: 85,
      green: 211,
      blue: 163,
    },
  },
  {
    hsl: {
      hue: 120,
      saturation: 68,
      lightness: 55,
    },
    rgb: {
      red: 62,
      green: 218,
      blue: 62,
    },
  },
  {
    hsl: {
      hue: 103,
      saturation: 60,
      lightness: 60,
    },
    rgb: {
      red: 126,
      green: 214,
      blue: 92,
    },
  },
  {
    hsl: {
      hue: 214,
      saturation: 89,
      lightness: 67,
    },
    rgb: {
      red: 96,
      green: 161,
      blue: 246,
    },
  },
];

describe("hslToRgbConversion", () => {
  test("should convert properly", () => {
    for (const colorConversion of knownColors) {
      expect(
        hslToRgb(colorConversion.hsl),
        `failed to convert hsl color ${JSON.stringify(colorConversion.hsl)}`
      ).toMatchObject(colorConversion.rgb);
    }
  });
});
