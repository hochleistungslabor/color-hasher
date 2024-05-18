import { modulo, stringToHSL, stringToHSLValues } from "../src";

function randomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let s = "";
  while (s.length < length) {
    s += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return s;
}

describe("modulo", () => {
  test("should be correct for positive numbers", () => {
    expect(modulo(13, 20)).toBe(13);
    expect(modulo(13, 10)).toBe(3);
  });
  test("should be correct for negative dividend", () => {
    expect(modulo(-13, 20)).toBe(7);
    expect(modulo(-13, 10)).toBe(7);
    expect(modulo(-9, 2)).toBe(1);
  });
  test("should be correct for negative divisor", () => {
    expect(modulo(-13, -10)).toBe(-3);
    expect(modulo(13, -10)).toBe(-7);
    expect(modulo(-13, -20)).toBe(-13);
    expect(modulo(13, -20)).toBe(-7);
  });
});

describe("stringToHSL", () => {
  test("should return a valid HSL color string", () => {
    const s = randomString(10);
    const color = stringToHSL(s);
    expect(color, `string ${s} => color ${color}`).toMatch(
      /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/
    );
  });

  test("should have values in proper ranges", () => {
    for (let i = 0; i < 10; i++) {
      const s = randomString(10);
      const color = stringToHSL(s);

      // check the hue
      const hue = parseInt(color.match(/^hsl\((\d{1,3}),/)?.[1] || "", 10);
      expect(hue, `string ${s} => color ${color}`).toBeGreaterThanOrEqual(0);
      expect(hue, `string ${s} => color ${color}`).toBeLessThan(360);

      // check the saturation
      const saturation = parseInt(
        color.match(/^hsl\(\d{1,3}, (\d{1,3})%,/)?.[1] || "",
        10
      );
      expect(
        saturation,
        `string ${s} => color ${color}`
      ).toBeGreaterThanOrEqual(60);
      expect(saturation, `string ${s} => color ${color}`).toBeLessThanOrEqual(
        99
      );

      // check the lightness
      const lightness = parseInt(
        color.match(/^hsl\(\d{1,3}, \d{1,3}%, (\d{1,3})%\)$/)?.[1] || "",
        10
      );
      expect(lightness, `string ${s} => color ${color}`).toBeGreaterThanOrEqual(
        40
      );
      expect(lightness, `string ${s} => color ${color}`).toBeLessThanOrEqual(
        79
      );
    }
  });
});

describe("stringToHSLValues", () => {
  test("should return consistent colors for same input", () => {
    const s = randomString(10);
    expect(stringToHSLValues(s), `string ${s}`).toMatchObject(
      stringToHSLValues(`${s}`)
    );
  });

  test("should return different colors for different inputs", () => {
    const s1 = randomString(10);
    let s2 = randomString(10);
    while (s1 === s2) {
      s2 = randomString(10);
    }
    const color1 = stringToHSLValues(s1);
    const color2 = stringToHSLValues(s2);
    expect(
      color1,
      `string ${s1} => color ${color1} -vs- string ${s2} => color ${color2}`
    ).not.toMatchObject(color2);
  });

  test("should have values in proper ranges", () => {
    for (let i = 0; i < 10; i++) {
      const s = randomString(10);
      const color = stringToHSLValues(s);

      // check the hue
      expect(color.hue, `string ${s} => color ${color}`).toBeGreaterThanOrEqual(
        0
      );
      expect(color.hue, `string ${s} => color ${color}`).toBeLessThan(360);

      // check the saturation
      expect(
        color.saturation,
        `string ${s} => color ${color}`
      ).toBeGreaterThanOrEqual(60);
      expect(
        color.saturation,
        `string ${s} => color ${color}`
      ).toBeLessThanOrEqual(99);

      // check the lightness
      expect(
        color.lightness,
        `string ${s} => color ${color}`
      ).toBeGreaterThanOrEqual(40);
      expect(
        color.lightness,
        `string ${s} => color ${color}`
      ).toBeLessThanOrEqual(79);
    }
  });
});
