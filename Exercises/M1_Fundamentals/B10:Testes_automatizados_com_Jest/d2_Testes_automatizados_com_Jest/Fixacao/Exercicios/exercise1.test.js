// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Verifica a chamada do callback "batata"', (done) => {
  uppercase('batata', (result) => {
    try {
      expect(result).toBe('BATATA');
      done();
    } catch (error) {
      done(error);
    }
  })
});
