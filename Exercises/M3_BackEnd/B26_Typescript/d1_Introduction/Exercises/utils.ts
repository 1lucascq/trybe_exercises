import readline from 'readline-sync'

function throwError (unity: string) {
  throw new Error(`${unity} não é um valor válido.`)
}

function convert (value: number, base: string, convertTo: string, units: string[]): number {

  if (!units.includes(base)) throwError(base);
  if (!units.includes(convertTo)) throwError(convertTo);

  const forIndex = units.indexOf(base);
  const toIndex = units.indexOf(convertTo);
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}


export default function exec (units: string[]): string {
  const value: number = readline.questionFloat('Digite o valor que deseja converter: ');
  const baseNum: number = readline.keyInSelect(units, 'Digite o formato que deseja converter: ');
  const convertToNum: number = readline.keyInSelect(units, 'Digite o formato para o qual deseja converter: ');
  const base = units[baseNum];
  const convertTo = units[convertToNum];
  const result = `O resultado da conversão é ${convert(value, base, convertTo, units)}`
  console.log(result);
  return result;
}