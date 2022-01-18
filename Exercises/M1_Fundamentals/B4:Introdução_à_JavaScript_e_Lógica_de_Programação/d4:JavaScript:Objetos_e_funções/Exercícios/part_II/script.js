//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
console.log('Exercício 1')

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
console.log('Exercício 2')

let arrayMaiorNumero = [2, 3, 6, 7, 10, 1];
function maiorNumero(a) {
  let testando = 0;
  for (let i in a) {
    if (a[testando] < a[i]) {
      testando = i;
    }
  }
  return testando;
}
console.log(maiorNumero(arrayMaiorNumero));


//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
console.log('Exercício 3');

let arrayMenorNumero = [2, 4, 6, 7, 10, 0, -3];
function MenorNumero(a) {
  let menor = 0;
  for (let i in a) {
    if (a[menor] > a[i]){
      menor = i;
    }
  }
  return menor;
}
console.log(MenorNumero(arrayMenorNumero))


//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
console.log('Exercício 4')

let arrayComNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maisCaracteres(a) {
  let maisCarac = 0;
  for (let i in a) {
    if (a[maisCarac].length < a[i].length) {
      maisCarac = i;
    }
      
  }
  return a[maisCarac];
}
console.log(maisCaracteres(arrayComNomes))


//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
console.log('Exercício 5')

let arrayComNumeros = [2, 3, 2, 5, 8, 2, 3];
function numerosRepetidos(a) {
  let count = 0;
  let numeroMaisRepetido = 0;
  for (let i in a) {
    for (let j in a) {
      if (a[i] === a[j])
      count += 1;
    }
  if (count > numeroMaisRepetido) {
    numeroMaisRepetido = a[i];
  }
    count = 0;
  }
  return numeroMaisRepetido;
}
console.log(numerosRepetidos(arrayComNumeros))


//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
console.log('Exercício 6')

let n = 5;
function somaTudo(a) {
  let valor = a;
  let soma = 0;
  for (let i = 0; i < a; i += 1) {
    soma += (a - i)
  }
  return soma
}
console.log(somaTudo(n))


//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o 
//final da string word. Considere que a string ending sempre será menor que a string word.
console.log('Exercício 7')

let strWord = 'trybe'
let strEnding = 'be'
function verificaFinal(palavra, final) {
  let palavraReversa = '';
  let resultado = '';
  for (let i = palavra.length - 1; i >= 0; i -= 1) {
    palavraReversa += palavra[i];
  }
  for (let k = final.length - 1; k >= 0; k -= 1) {
    resultado += palavraReversa[k]
  }
  if (resultado === final) return true
  return false
}
console.log(verificaFinal(strWord, strEnding))