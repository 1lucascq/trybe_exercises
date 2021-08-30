// 1. Crie uma função que receba um número e retorne seu fatorial.
  // Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator .
console.log('Exercício 1:');

const factorial = a => a > 1 ? a * factorial(a-1): 1;
console.log(factorial(5));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
console.log('Exercício 2:');

function biggestWordFunction (str) {
  const splited = str.split(' ');
  let biggestWord = '';
  for (let i of splited) {
    if (i.length > biggestWord.length) {
      biggestWord = i;
    }
  }
  return biggestWord
}

//Com Ternary Operator:
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];
console.log(biggestWordFunction("Antônio foi no banheiro e não sabemos o que aconteceu"));
console.log('Usando ternary operator:', longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 3. Crie uma página que contenha:
  // Um botão ao qual será associado um event listener;
  // Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
  // Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
console.log('Exercício 3: *feito no html');

// 4. Crie um código JavaScript com a seguinte especificação:
  // Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
const oldStr = 'Tryber x aqui!'
const newStr = str => str.replace('x', 'Lucas');
console.log(newStr(oldStr));
// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills .
  // Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
const array = ['JS', 'CSS', 'HTML', 'GitHub', 'Python']
const greetings = newStr(oldStr);
  
function buildSkillsPhrase () {
  let result = `${greetings}. Minhas cinco principais habilidades são:`;

  array.sort().forEach((skill) =>
  result = `${result}
  - ${skill}`);
  result = `${result}
  #goTrybe
  `;

  return result;
}

console.log(buildSkillsPhrase());

