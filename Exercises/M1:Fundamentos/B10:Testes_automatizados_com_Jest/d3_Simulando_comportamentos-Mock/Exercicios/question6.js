// 6. Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request success". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

function fetchDogPic() {
  return fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json()
    .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json)
  ));
}

module.exports = { fetchDogPic };