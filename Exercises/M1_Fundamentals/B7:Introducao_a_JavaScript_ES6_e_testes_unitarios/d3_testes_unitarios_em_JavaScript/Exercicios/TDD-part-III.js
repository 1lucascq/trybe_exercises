const assert = require('assert');
//          REESCREVENDO E TESTANDO CÓDIGOS
// 1. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const greetPeople = people => {
  let greeting = 'Hello ';
  let greetingArray = [];

  for (let person in people) {
    greetingArray.push(greeting + people[person]);
  }
  return greetingArray;
};

const parameterOne = ['Irina', 'Ashleigh', 'Elsa'];
const resultOne = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const outputOne = greetPeople(parameterOne)
assert.deepStrictEqual(outputOne, resultOne)


// 2. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const removeVowels = word => {
  const characters = word.split('');
  let results = '';
  let howManyVowels = 1;
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results += howManyVowels;
      howManyVowels += 1;
    } else {
      results += characters[i];
    }
  }
  return results;
};
const parameterTwo = 'Dayane';
const resultTwo = 'D1y2n3';
const outputTwo = removeVowels(parameterTwo);
assert.strictEqual(outputTwo, resultTwo);



// 3. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const greaterThanTen = array => {
  let results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) results.push(array[i]);
    }
  return results;
};
const parameterThree = [4, 10, 32, 9, 21];
const resultThree = [32, 21];
const outputThree = greaterThanTen(parameterThree);
assert.deepStrictEqual(outputThree, resultThree);



// 4. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
function secondThirdSmallest(array) {
  let results = []
  array.sort((x, y) => x - y);
  results = [array[1], array[2]];
  return results;
};

const parameterFour = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const resultFour = [5, 6];
const outputFour = secondThirdSmallest(parameterFour);
assert.deepStrictEqual(outputFour, resultFour);