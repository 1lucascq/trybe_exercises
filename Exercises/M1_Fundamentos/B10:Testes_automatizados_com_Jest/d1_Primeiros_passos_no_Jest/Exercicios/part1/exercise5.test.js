const { obj1, obj2, obj3 } = require('./exercise5.js');
console.log(obj1)
console.log(obj2)
console.log(obj3)

describe('Compare dois objetos e veja se eles são idênticos ou não', () => {
  it('Teste 1: valores iguais de obj1 e obj2', () => {
    expect(obj1).toEqual(obj2)
  });
  it('Teste 2: valores diferentes de obj1 e obj3', () => {
    expect(Object.entries(obj1)).not.toEqual(Object.entries(obj3))
  });
  it('Teste 3: valores diferentes de obj3 e obj2', () => {
    expect(obj3).not.toEqual(obj2)
  });
});
