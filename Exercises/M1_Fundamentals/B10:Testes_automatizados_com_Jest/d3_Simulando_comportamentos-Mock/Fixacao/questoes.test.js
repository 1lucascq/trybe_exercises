// 1. Faça o mock da função subtrair e teste sua chamada.
// 2. Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
// 3. Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
// 4. Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
// 5. Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

const math = require('./math.js')
jest.mock('./math.js')

describe('Testando mock das funções do arquivo math', () => {
  it("mock da função multiplicar", () => {
    math.multiplicar = jest.fn()
      .mockReturnValue(10)
    
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
    expect(math.multiplicar(10)).toBe(10);
  });

  it("mock da função somar", () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(3, 4);
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledWith(3, 4);
    expect(math.somar(3, 4)).toBe(7);
  });

  it("mock da função dividir", () => {
    math.dividir
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5)
    
    expect(math.dividir).not.toHaveBeenCalled();
    expect(math.dividir).toHaveBeenCalledTimes(0);
    expect(math.dividir()).toBe(2);
    expect(math.dividir()).toBe(5);
    expect(math.dividir()).toBe(15);
  });

  it("mock da função subtrair", () => {
    const mockSubtrair = jest.spyOn(math, 'subtrair');
    mockSubtrair.mockImplementation((a, b) => a * b);
    mockSubtrair.mockReturnValue(20);

    expect(mockSubtrair(10, 2)).toBe(20);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
    
    mockSubtrair.mockRestore();
    mockSubtrair.mockReturnValue(8);
    
    expect(mockSubtrair(10, 2)).toBe(8);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(10, 2);
  });
})