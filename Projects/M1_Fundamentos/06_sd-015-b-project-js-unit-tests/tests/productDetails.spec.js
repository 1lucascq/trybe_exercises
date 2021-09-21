const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:S
    // Teste se o retorno da função é um array.
    const isArray = productDetails('Álcool gel', 'Máscara');
    assert.deepStrictEqual(Array.isArray(isArray), true);
    // Teste se o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(isArray.length, 2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof isArray[0] && typeof isArray[1], 'object');

    // Teste se os dois objetos são diferentes entre si.
    assert.deepStrictEqual(isArray[0] === isArray[1], false);

    // Teste se os dois productIds terminam com 123.
    const firstProduct = isArray[0].details.productId.split('').reverse().splice(0, 3).reverse();
    const secondProduct = isArray[1].details.productId.split('').reverse().splice(0, 3).reverse();
    assert.deepStrictEqual(firstProduct && secondProduct , ['1', '2', '3']);

  });
});
