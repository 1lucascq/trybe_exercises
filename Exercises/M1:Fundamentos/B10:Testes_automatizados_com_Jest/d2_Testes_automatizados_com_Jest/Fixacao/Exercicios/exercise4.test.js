// 4 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique se os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.


const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('verifique se os repositorios descritos se encontram na lista', () => {
  it('repositorio: "sd-01-week4-5-project-todo-list"', async () => {
    const result = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(result).toContain('sd-01-week4-5-project-todo-list');
  });
  
  it('repositorio: "sd-01-week4-5-project-meme-generator"', async () => {
    const result = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });
  
});
