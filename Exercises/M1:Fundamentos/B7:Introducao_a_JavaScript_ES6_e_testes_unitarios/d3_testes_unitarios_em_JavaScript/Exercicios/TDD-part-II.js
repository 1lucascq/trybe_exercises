const assert = require('assert');
//          ESCREVENDO CÓDIGOS
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

let wordsFour = ['house', 'train', 'slide', 'needle', 'book'];
let expectedFour = 3;
let outputFour = findTheNeedle(wordsFour, 'needle');
assert.strictEqual(outputFour, expectedFour);

wordsFour = ['plant', 'shelf', 'arrow', 'bird'];
expectedFour = 0;
outputFour = findTheNeedle(wordsFour, 'plant');
assert.strictEqual(outputFour, expectedFour);

wordsFour = ['plant', 'shelf', 'arrow', 'bird'];
expectedFour = -1;
outputFour = findTheNeedle(wordsFour, 'plat');
assert.strictEqual(outputFour, expectedFour);
