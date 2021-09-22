// 1. Para as funções encode e decode crie os seguintes testes:
//  Teste se encode e decode são funções;
//  Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
//  Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
//  Teste se as demais letras/números não são convertidos para cada caso;
//  Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
const { encode, decode } = require('./p2exercise1.js')

describe('Testes da função encode e decode', () => {
  it('Teste 1:', () => {
    expect(typeof encode && typeof decode).toBe('function')
  });
  it('Teste 2:', () => {
    expect(encode('aeiou')).toBe('12345')
  });
  it('Teste 3:', () => {
    expect(decode('12345')).toBe('aeiou')
  });
  it('Teste 4 encode:', () => {
    expect(encode('reuniao')).toBe('r25n314')
  });
  it('Teste 4 decode:', () => {
    expect(decode('r25n314')).toBe('reuniao')
  });
  it('Teste 5:', () => {
    expect((encode('batata').length)).toBe(6)
  });
});
