export function throwError (unity: string) {
  throw new Error(`${unity} não é um valor válido.`)
}

export default function convert (value: number, base: string, convertTo: string, units: string[]): number {

  if (!units.includes(base)) throwError(base);
  if (!units.includes(convertTo)) throwError(convertTo);

  const forIndex = units.indexOf(base);
  const toIndex = units.indexOf(convertTo);
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}