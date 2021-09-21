// 1. Como primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! . Como? Vamos praticar!

const API_URL = 'https://icanhazdadjoke.com';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      document.getElementById('jokeContainer').innerText = data.joke
    );
}

window.onload = () => fetchJoke();
