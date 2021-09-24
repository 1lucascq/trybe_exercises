const exercise = require('./exercise.js')
const { randomNumber, stringConcat, stringToUppercase, firstLetter } = require('./exercise.js')

jest.mock('./exercise.js')

describe('testes da função randomNumber()', () => {
  
  it('Questão 1', () => {
    exercise.randomNumber = jest.fn().mockReturnValue(10)

    exercise.randomNumber();

    expect(exercise.randomNumber).toHaveBeenCalled();
    expect(exercise.randomNumber()).toBe(10);
    expect(exercise.randomNumber).toHaveBeenCalledTimes(2)
  })
  
  it('Questão 2', () => {
    exercise.randomNumber = jest.fn().mockImplementationOnce((a, b) => a/b);
    
    expect(exercise.randomNumber(6, 3)).toBe(2);
    expect(exercise.randomNumber).toHaveBeenCalled();
    expect(exercise.randomNumber).toHaveBeenCalledTimes(1)
  })

  it('Questão 3', () => {
    exercise.randomNumber = jest.spyOn(exercise, 'randomNumber')
      .mockImplementationOnce((a, b, c) => a*b*c)

    
    expect(exercise.randomNumber(2, 2, 3)).toBe(12);
    expect(exercise.randomNumber).toHaveBeenCalled();
    expect(exercise.randomNumber).toHaveBeenCalledTimes(2)
  
    exercise.randomNumber
      .mockReset()
      .mockImplementation((a) => a*2)
    
    expect(exercise.randomNumber(7)).toBe(14);
  })
});

describe('testes da função stringToUppercase()', () => {
  
  it('Questão 4', () => {
      exercise.stringToUppercase.mockImplementation(a => a.toLowerCase());
  
      expect(exercise.stringToUppercase('TRYBE')).toBe('trybe');
      expect(exercise.stringToUppercase).toHaveBeenCalled();
      expect(exercise.stringToUppercase).toHaveBeenCalledTimes(1);
      expect(exercise.stringToUppercase).toHaveBeenCalledWith('TRYBE');
  })

  it('Questão 4', () => {
      exercise.firstLetter.mockImplementation(a => a.slice(a.length - 1));
  
      expect(exercise.firstLetter('trybe')).toBe('e');
      expect(exercise.firstLetter).toHaveBeenCalled();
      expect(exercise.firstLetter).toHaveBeenCalledTimes(1);
      expect(exercise.firstLetter).toHaveBeenCalledWith('trybe');
  })

  it('Questão 4', () => {
      exercise.stringConcat.mockImplementation((a, b, c) => a.concat(b, c));
  
      expect(exercise.stringConcat('vamos', 'que', 'vaaamos')).toBe('vamosquevaaamos');
      expect(exercise.stringConcat).toHaveBeenCalled();
      expect(exercise.stringConcat).toHaveBeenCalledTimes(1);
      expect(exercise.stringConcat).toHaveBeenCalledWith('vamos', 'que', 'vaaamos');
  })

  it('Questão 5', () => {
    const test = jest
      .spyOn(exercise, "stringToUppercase")
      .mockImplementation(a => a.toLowerCase());

    expect(test("TRYBE")).toBe("trybe");
    expect(test).toHaveBeenCalled();
    expect(test).toHaveBeenCalledTimes(2);
    expect(test).toHaveBeenCalledWith("TRYBE");

    exercise.stringToUppercase.mockRestore();

    expect(exercise.stringToUppercase("trybe")).toBe("TRYBE");
    });
});