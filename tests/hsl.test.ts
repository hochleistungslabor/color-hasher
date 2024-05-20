import { stringHashHSL } from "../src";

function randomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let s = "";
  while (s.length < length) {
    s += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return s;
}

describe("stringHashHSL", () => {
  test("should return consistent colors for same input", () => {
    const s = randomString(10);
    expect(stringHashHSL(s), `string ${s}`).toMatchObject(
      stringHashHSL(`${s}`)
    );
  });

  test("should return different colors for different inputs", () => {
    const s1 = randomString(10);
    let s2 = randomString(10);
    while (s1 === s2) {
      s2 = randomString(10);
    }
    const color1 = stringHashHSL(s1);
    const color2 = stringHashHSL(s2);
    expect(
      color1,
      `string ${s1} => color ${color1} -vs- string ${s2} => color ${color2}`
    ).not.toMatchObject(color2);
  });

  test("should have values in proper ranges", () => {
    for (let i = 0; i < 10; i++) {
      const s = randomString(10);
      const color = stringHashHSL(s);

      // check the hue
      expect(color.hue, `string ${s} => color ${color}`).toBeGreaterThanOrEqual(
        0
      );
      expect(color.hue, `string ${s} => color ${color}`).toBeLessThan(360);

      // check the saturation
      expect(
        color.saturation,
        `string ${s} => color ${color}`
      ).toBeGreaterThanOrEqual(52);
      expect(
        color.saturation,
        `string ${s} => color ${color}`
      ).toBeLessThanOrEqual(100);

      // check the lightness
      expect(
        color.lightness,
        `string ${s} => color ${color}`
      ).toBeGreaterThanOrEqual(45);
      expect(
        color.lightness,
        `string ${s} => color ${color}`
      ).toBeLessThanOrEqual(78);
    }
  });
});
