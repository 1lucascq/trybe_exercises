const service = require("./service")
// jest.mock(randomNumber)
const { describe, it, expect } = require('@jest/globals')


describe('1. Testa se a função "randomNumber" gera um número aleatório', () => {
  it('Verifica se a função é chamada, seu retorno (10) e quantas vezes foi chamada ', () => {
    service.randomNumber = jest.fn().mockReturnValue(10)

    service.randomNumber()
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toBeCalledTimes(2);

  })
})

describe('2. Mock da função "randomNumber', () => {
  it('Testa se a função foi chamada e a nova implementação de divisão foi aplicada e verifica se a aplicadação da nova implementação ocorre apenas uma vez', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b)
    
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber(10, 2)).not.toBe(5);
    expect(service.randomNumber).toBeCalledTimes(2);
  })  
})

describe('3. Mock da função "randomNumber', () => {
  it('Testa se a função foi chamada e a nova implementação de multiplicação foi aplicada e verifica se a aplicação da nova implementação é resetada para dobrar um parametro X', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c)
    
    
    expect(service.randomNumber(10, 2, 3)).toBe(60);
    expect(service.randomNumber(10, 2, 1)).toBe(20);
    expect(service.randomNumber).toBeCalledTimes(2);

    service.randomNumber = jest.fn().mockReset().mockImplementation(x => x * 2)

    expect(service.randomNumber(1)).toBe(2);
    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toBeCalledTimes(2);
  })
})
  
describe('4. Mock das 3 funções lá', () => {
  it('Testa se a função foi chamada e a nova implementação de multiplicação foi aplicada e verifica se a aplicação da nova implementação é resetada para dobrar um parametro X', () => {
    service.talkLOUDER = jest.spyOn(service, 'talkLOUDER').mockImplementation((string) => string.toLowerCase())
    
    expect(service.talkLOUDER('ALO')).toBe('alo');
    expect(service.talkLOUDER('Oi')).toBe('oi');
    expect(service.talkLOUDER).toBeCalledTimes(2);

    service.returnFirstLetter = jest.fn().mockImplementation((string) => string.slice(-1))
    
    expect(service.returnFirstLetter('ALO')).toBe('O');
    expect(service.returnFirstLetter('Batima')).toBe('a');
    expect(service.returnFirstLetter).toBeCalledTimes(2);

    service.concatenateStrings = jest.fn().mockImplementation((stringA, stringB, stringC) => stringA.concat(stringB, stringC))
    
    expect(service.concatenateStrings('Bond. ', 'James ', 'Bond.')).toBe('Bond. James Bond.');
    expect(service.concatenateStrings('a', 'b', 'c')).toBe('abc');
    expect(service.concatenateStrings).toBeCalledTimes(2);

    service.talkLOUDER.mockRestore();
    expect(service.talkLOUDER('alo')).toBe('ALO');
  })
})
