enum ValueType {
  km = 0.001,
  m = 1,
  dm = 10,
  cm = 100,
}
// Course:
const units = ['km', 'm', 'dm', 'cm']

function throwError (unity: string) {
  throw new Error(`${unity} não é um valor válido. Tente: km, m, dm ou cm.`)
}
function convert (value: number, base: string, convertTo: string): number {

  if (!units.includes(base)) throwError(base); // se a unidade base não for válida lançamos um erro
  if (!units.includes(convertTo)) throwError(convertTo); // se a unidade para a conversão não for válida lançamos um erro

  const forIndex = units.indexOf(base); // pegamos o index da unidade base no array
  const toIndex = units.indexOf(convertTo); // pegamos o index da unidade para a conversão
  const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}

console.log(convert(1000, 'cm', 'km'))