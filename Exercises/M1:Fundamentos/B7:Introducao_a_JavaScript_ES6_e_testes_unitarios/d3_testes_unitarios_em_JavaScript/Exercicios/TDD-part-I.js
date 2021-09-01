const assert = require('assert');
//          EXERCÍCIO 1
// 1. A função sum(a, b) retorna a soma do parâmetro a com o b
  // Teste se o retorno de sum(4, 5) é 9
  // Teste se o retorno de sum(0, 0) é 0
  // Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}
// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9, '4 + 5 = 9');
assert.strictEqual(sum(0, 0), 0, '0 + 0 = 0');
assert.throws(() => (sum(4, '5')));
assert.throws(() => {sum(4, '5');}, /^Error: parameters must be numbers$/);



//          EXERCÍCIO 2
// 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  // Verifique se o array passado por parâmetro não sofreu alterações
  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// implemente seus testes aqui
const ar = [1, 2, 3, 4];
assert.deepStrictEqual(myRemove(ar, 3), [1, 2, 4], 'O array retornado está errado');
assert.notDeepStrictEqual(myRemove(ar, 3), [1, 2, 3, 4], 'O array retornado está errado');
assert.deepStrictEqual(ar, [1, 2, 3, 4], 'O array foi alterado');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'O array retornado está errado');



//          EXERCÍCIO 3
// 3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  // Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const ar3 = [1, 2, 3, 4];
assert.deepStrictEqual(myRemoveWithoutCopy(ar3, 3), [1, 2, 4], 'O array retornado está errado');
assert.notDeepStrictEqual(myRemoveWithoutCopy(ar3, 3), [1, 2, 3, 4], 'O array retornado está errado');
assert.notDeepStrictEqual(ar3, [1, 2, 3, 4], 'O array retornado está errado');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'O array retornado está errado');


//          EXERCÍCIO 4
// 4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
  // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(30), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(3), 'fizz');
assert.strictEqual(myFizzBuzz(5), 'buzz');
assert.strictEqual(myFizzBuzz(2), 2);
assert.strictEqual(myFizzBuzz('batman'), false);



//          EXERCÍCIO 5
// 5. Compare dois objetos para verificar se são idênticos ou não
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.notDeepStrictEqual(obj1, obj3);
assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj2, obj3);