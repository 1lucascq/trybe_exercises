// Código base para os exercícios 2 e 3:
// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise, que é utilizada pelo método getUserName.
// 2 - Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.


describe('verifique o resultado da função getUserName para:', () => {
  it('o usuário é encontrado', () => {
    return getUserName(1).then((userName) => (
      expect(userName).toBe('Mark')
    ));
  });
  
  it('o usuário não é encontrado', () => {
    expect.assertions(1);
    return getUserName('dez').catch((error) => (
      expect(error.message).toMatch(`User with dez not found.`)
    ));
  })
});

// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('verifique o resultado da função getUserName para:', () => {
  it('o usuário é encontrado', async () => {
    const result = await getUserName(1);
    expect(result).toBe('Mark');
  });
  
  it('o usuário não é encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName('dez')
    } catch (error) {
      expect(error.message).toMatch(`User with dez not found.`)      
    }
  })
});
