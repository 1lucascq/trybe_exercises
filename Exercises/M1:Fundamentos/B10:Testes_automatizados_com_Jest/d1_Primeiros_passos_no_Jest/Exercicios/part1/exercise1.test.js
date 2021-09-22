// 1. A função sum(a, b) retorna a soma do parâmetro a com o b
//  Teste se o retorno de sum(4, 5) é 9
//  Teste se o retorno de sum(0, 0) é 0
//  Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
//  Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const sum = require('./exercise1.js');

describe('a função sum() retorna a soma de a + b', () => {
  it('sum of 4 and 5 equal to 9', () => expect(sum(4, 5)).toBe(9));
  it('sum of 0 and 0 equal to 0', () => expect(sum(0, 0)).toBe(0));
  it('expect error when a parameter is a string', () => expect( () => { sum(4, '5') } )
    .toThrow());
  it('error must be parameters must be numbers', () => expect( () => { sum(4, '5') } )
    .toThrowError(new Error('parameters must be numbers')));
});

//A função anônima chamada no expect executa a função sum, que gera o erro, que é capturado pelo .toThrow e .toThrowError;