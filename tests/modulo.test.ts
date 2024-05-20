import { modulo } from "../src";

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
