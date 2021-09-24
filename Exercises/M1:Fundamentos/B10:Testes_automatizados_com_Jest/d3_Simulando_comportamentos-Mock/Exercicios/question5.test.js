const exercise = require("./question5");

describe("testando implementações", () => {
  it('Questão 5', () => {
    const test = jest
      .spyOn(exercise, "stringToUppercase")
      .mockImplementation(a => a.toLowerCase());

    expect(test("TRYBE")).toBe("trybe");
    expect(test).toHaveBeenCalled();
    expect(test).toHaveBeenCalledTimes(1);
    expect(test).toHaveBeenCalledWith("TRYBE");

    exercise.stringToUppercase.mockRestore();

    expect(exercise.stringToUppercase("trybe")).toBe("TRYBE");
  });
});