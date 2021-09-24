// 5. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

function stringToUppercase (string) {
  return string.toUpperCase();
}

function firstLetter (string) {
  return string.split('')[0]
}

function stringConcat (stringA, stringB) {
  return stringA.concat(stringB)
}


module.exports = { stringToUppercase, firstLetter, stringConcat }