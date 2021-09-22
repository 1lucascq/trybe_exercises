// 3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
//  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
//  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
//  Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
//  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const myRemoveWithoutCopy = require('./exercise3.js')
const myList = [1, 2, 3, 4];

describe('A função myRemoveWithoutCopy recebe um array e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  it('a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  it('a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    expect(myRemoveWithoutCopy(myList, 1)).not.toEqual([1, 2, 3, 4])
  });
  it('a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
});
