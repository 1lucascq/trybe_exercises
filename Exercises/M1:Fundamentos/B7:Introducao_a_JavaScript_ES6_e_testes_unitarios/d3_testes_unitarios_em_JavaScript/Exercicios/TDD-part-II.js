//          ESCREVENDO CÓDIGOS
const assert = require('assert');
// 1. Escreva a função addOne para passar nos testes já implementados.
function addOne(ar) {
  let newAr = [];
  for (let i in ar) {
    newAr.push(ar[i] + 1);
  }
  return newAr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expectedOne = [32, 58, 13, 6];
const outputOne = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(outputOne, expectedOne);
assert.deepStrictEqual(myArray, unchanged);



// 2. Escreva a função wordLengths para passar nos testes já implementados.
function wordLengths(ar) {
  let newAr = [];
  for (let i in ar) {
    newAr.push(ar[i].length);
  }
  return newAr;
}

const wordsTwo = ['sun', 'potato', 'roundabout', 'pizza'];
const expectedTwo = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const outputTwo = wordLengths(wordsTwo);
assert.deepStrictEqual(outputTwo, expectedTwo);



// 3. Escreva a função sumAllNumbers para passar nos testes já implementados.
function sumAllNumbers(ar) {
  let sum = 0;
  for (i in ar) {
    sum += ar[i];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);



// 4. Escreva a função findTheNeedle para passar nos testes já implementados.
function findTheNeedle(ar, word) {
  let result = -1
  for (let i in ar) {
    if (ar[i] === word) {
      result = parseInt(i);
    }
  }
  return result;
}

let wordsThree = ['house', 'train', 'slide', 'needle', 'book'];
let expectedThree = 3;
let outputThree = findTheNeedle(wordsThree, 'needle');
assert.strictEqual(outputThree, expectedThree);

wordsThree = ['plant', 'shelf', 'arrow', 'bird'];
expectedThree = 0;
outputThree = findTheNeedle(wordsThree, 'plant');
assert.strictEqual(outputThree, expectedThree);

wordsThree = ['plant', 'shelf', 'arrow', 'bird'];
expectedThree = -1;
outputThree = findTheNeedle(wordsThree, 'plat');
assert.strictEqual(outputThree, expectedThree);






//          REESCREVENDO E TESTANDO CÓDIGOS
// 1. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    greeting += people[person];
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];



// 2. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results.push(characters[index]);
    } else {
      results.push('_');
    }
  }
  return results;
};


const parameter = 'Dayane';
const result = 'D1y2n3';



// 3. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const greaterThanTen = (array) => {
  let results = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results += array[index];
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];



// 4. Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x + y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
