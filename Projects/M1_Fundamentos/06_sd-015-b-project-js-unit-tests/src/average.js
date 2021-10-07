/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (a) => {
  let sum = 0;
  let arrayAverage = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (typeof a[i] !== 'number') return undefined;
    sum += a[i];
  }
  arrayAverage = Math.round(sum / a.length);
  if (Number.isNaN(arrayAverage) === true) return undefined;
  console.log(arrayAverage);
  return arrayAverage;
};
module.exports = average;
