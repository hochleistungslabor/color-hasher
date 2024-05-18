export interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

export function modulo(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function stringToHSLValues(str: string): HSL {
  let sum = 0;

  // turn the input into a consistent value
  for (let i = 0; i < str.length; i++) {
    sum = str.charCodeAt(i) + ((sum << 5) - sum);
  }

  // Use the hash to generate the HSL components
  const hue = modulo(sum, 360); // Hue: 0 - 359
  const saturation = 60 + modulo(sum, 40); // Saturation: 60% - 99%
  const lightness = 40 + modulo(sum, 40); // Lightness: 40% - 79%

  return {
    hue,
    saturation,
    lightness,
  };
}

export function stringToHSL(str: string): string {
  const hsl = stringToHSLValues(str);
  return `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`;
}
