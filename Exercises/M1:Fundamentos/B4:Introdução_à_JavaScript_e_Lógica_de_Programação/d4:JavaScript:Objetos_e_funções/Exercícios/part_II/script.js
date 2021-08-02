//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindromo(a) {
  let reverse = a.split('').reverse().join('')
  if (a === reverse) {
  return true
  } else {
  return false
  }
}
console.log(verificaPalindromo('arara'))
console.log(verificaPalindromo('desenvolvimento'))

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let arrayMaiorNumero = [2, 3, 6, 7, 10, 1];

function compararNumeros(a, b) {
  return a - b;
}
console.log(arrayMaiorNumero.sort(compararNumeros));

// function maiorNumero([a]){
//   for (let i = 0; i < a.length; i += 1) {
//     for (let j = 0; j < a.length; j += 1) {
//       if (i > j)

//     }
//       return i;
//   }
// }
// console.log(maiorNumero(arrayMaiorNumero))
