// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
// });

// -->  Uma coisa que você irá reparar é que quando o programa é bem sucedido, seu output aparece normalmente. Já quando ele é mal sucedido, ele lança um error ! Essa é a principal diferença entre o resolve e o reject , exatamente o que queríamos demonstrar. Na próxima sessão vamos ver como tratar este erro.

// -----------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg));

// 1. Passamos como argumento uma função. Essa função também recebe 1 argumento que é o retorno do resolve da nossa promise.
// 2. O .then() é usado "em cadeia", um conceito chamado de chaining . Assim, podemos colocar vários .then() em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o .then() espera a promise (ou o .then() anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!
// 3. Vamos ver o que acontece no código acima. A promise é executada e, após sua execução, caso o número seja algo entre 5 e 10, o resolve retorna o número que é passado para o primeiro .then() como number . Por sua vez, ele retorna a frase Que sucesso =) nosso número foi ${number} que é passado como argumento para o segundo .then() , que o usa para "logar" no console.

// -----------------------------------------------------------------------

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

// 1. Assim, quando a promise retorna um reject , pula todos os .then() e executa o primeiro .catch() que encontrar. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo é geralmente usado no final.