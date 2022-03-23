// enum ValueType {
//   km = 0.001,
//   m = 1,
//   dm = 10,
//   cm = 100,
// }
// Course:
const weightUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cm', 'mg']

function throwWeightError (unity: string) {
  throw new Error(`${unity} não é um valor válido.`)
}
function convertWeight (value: number, base: string, convertTo: string): number {

  if (!weightUnits.includes(base)) throwWeightError(base); // se a unidade base não for válida lançamos um erro
  if (!weightUnits.includes(convertTo)) throwWeightError(convertTo); // se a unidade para a conversão não for válida lançamos um erro

  const forIndex = weightUnits.indexOf(base); // pegamos o index da unidade base no array
  const toIndex = weightUnits.indexOf(convertTo); // pegamos o index da unidade para a conversão
  const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}

console.log(convertWeight(1000, 'g', 'kg'))