/*
✅
Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.

Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".

Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".

Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".

Caso contrário, rejeite a Promise com o valor do número.
*/

const rdmNumber = Math.floor(Math.random() * (100 + 1))
console.log('O número é: ', rdmNumber)
function returnPromise(n) {
  return new Promise((resolve, reject) => {
    if (n % 3 === 0 && n % 5 === 0) return resolve('FizzBuzz');
    if (n % 3 === 0) return resolve('Fizz');
    if (n % 5 === 0) return resolve('Buzz');
    reject(n);
  })
}
returnPromise(rdmNumber).then((res) => console.log(res)).catch((err) => console.log(err));