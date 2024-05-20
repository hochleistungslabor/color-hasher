import { calculateLuminance } from "../src";

const knownLuminances = [
  {
    rgb: {
      red: 85,
      green: 206,
      blue: 182,
    },
    luminance: 0.4945,
  },
  {
    rgb: {
      red: 151,
      green: 201,
      blue: 44,
    },
    luminance: 0.4853,
  },
  {
    rgb: {
      red: 138,
      green: 244,
      blue: 227,
    },
    luminance: 0.7565,
  },
  {
    rgb: {
      red: 253,
      green: 28,
      blue: 50,
    },
    luminance: 0.2194,
  },
  {
    rgb: {
      red: 56,
      green: 199,
      blue: 51,
    },
    luminance: 0.4193,
  },
  {
    rgb: {
      red: 151,
      green: 242,
      blue: 239,
    },
    luminance: 0.7632,
  },
  {
    rgb: {
      red: 170,
      green: 139,
      blue: 234,
    },
    luminance: 0.3295,
  },
  {
    rgb: {
      red: 254,
      green: 123,
      blue: 222,
    },
    luminance: 0.4051,
  },
  {
    rgb: {
      red: 186,
      green: 103,
      blue: 59,
    },
    luminance: 0.2046,
  },
  {
    rgb: {
      red: 203,
      green: 149,
      blue: 72,
    },
    luminance: 0.3466,
  },
  {
    rgb: {
      red: 176,
      green: 91,
      blue: 241,
    },
    luminance: 0.2306,
  },
  {
    rgb: {
      red: 210,
      green: 223,
      blue: 88,
    },
    luminance: 0.6718,
  },
  {
    rgb: {
      red: 246,
      green: 231,
      blue: 14,
    },
    luminance: 0.7678,
  },
  {
    rgb: {
      red: 222,
      green: 164,
      blue: 27,
    },
    luminance: 0.4216,
  },
  {
    rgb: {
      red: 221,
      green: 49,
      blue: 66,
    },
    luminance: 0.1796,
  },
  {
    rgb: {
      red: 55,
      green: 189,
      blue: 50,
    },
    luminance: 0.3744,
  },
  {
    rgb: {
      red: 228,
      green: 98,
      blue: 122,
    },
    luminance: 0.2663,
  },
  {
    rgb: {
      red: 240,
      green: 117,
      blue: 217,
    },
    luminance: 0.3626,
  },
  {
    rgb: {
      red: 62,
      green: 204,
      blue: 182,
    },
    luminance: 0.4759,
  },
  {
    rgb: {
      red: 215,
      green: 244,
      blue: 26,
    },
    luminance: 0.7922,
  },
  {
    rgb: {
      red: 211,
      green: 29,
      blue: 187,
    },
    luminance: 0.1832,
  },
  {
    rgb: {
      red: 127,
      green: 131,
      blue: 235,
    },
    luminance: 0.2674,
  },
  {
    rgb: {
      red: 189,
      green: 156,
      blue: 226,
    },
    luminance: 0.4009,
  },
  {
    rgb: {
      red: 240,
      green: 0,
      blue: 128,
    },
    luminance: 0.2008,
  },
  {
    rgb: {
      red: 71,
      green: 78,
      blue: 215,
    },
    luminance: 0.1169,
  },
  {
    rgb: {
      red: 215,
      green: 39,
      blue: 29,
    },
    luminance: 0.1599,
  },
  {
    rgb: {
      red: 82,
      green: 239,
      blue: 161,
    },
    luminance: 0.661,
  },
  {
    rgb: {
      red: 115,
      green: 59,
      blue: 237,
    },
    luminance: 0.1289,
  },
  {
    rgb: {
      red: 55,
      green: 255,
      blue: 0,
    },
    luminance: 0.7233,
  },
  {
    rgb: {
      red: 216,
      green: 175,
      blue: 14,
    },
    luminance: 0.4529,
  },
  {
    rgb: {
      red: 80,
      green: 231,
      blue: 216,
    },
    luminance: 0.6382,
  },
  {
    rgb: {
      red: 255,
      green: 247,
      blue: 15,
    },
    luminance: 0.8782,
  },
  {
    rgb: {
      red: 217,
      green: 118,
      blue: 219,
    },
    luminance: 0.3282,
  },
  {
    rgb: {
      red: 213,
      green: 122,
      blue: 72,
    },
    luminance: 0.2853,
  },
  {
    rgb: {
      red: 128,
      green: 107,
      blue: 250,
    },
    luminance: 0.2201,
  },
  {
    rgb: {
      red: 253,
      green: 99,
      blue: 115,
    },
    luminance: 0.3104,
  },
  {
    rgb: {
      red: 85,
      green: 211,
      blue: 163,
    },
    luminance: 0.5116,
  },
  {
    rgb: {
      red: 62,
      green: 218,
      blue: 62,
    },
    luminance: 0.5151,
  },
  {
    rgb: {
      red: 126,
      green: 214,
      blue: 92,
    },
    luminance: 0.533,
  },
  {
    rgb: {
      red: 96,
      green: 161,
      blue: 246,
    },
    luminance: 0.3463,
  },
];

describe("luminanceTests", () => {
  test("should compute proper luminances", () => {
    for (const colorLuminances of knownLuminances) {
      expect(
        calculateLuminance(colorLuminances.rgb),
        `failed to compute luminance for ${JSON.stringify(colorLuminances.rgb)}`
      ).toBeCloseTo(colorLuminances.luminance);
    }
  });
});
