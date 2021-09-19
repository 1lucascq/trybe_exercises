// 2. Agora, um passo para trás: vamos fazer, passo a passo, uma Promise

// const fetchPromise = () => {
//   const myPromise = new Promise((resolve, reject) => {
//     const createArray = Array.from(
//       { length: 10 },
//       () =>  Math.floor(Math.random() * 50) + 1
//     );
//     const sum = createArray.map(n => n * n).reduce((sum, n) => sum + n, 0);
//     (sum < 8000) ? resolve(sum) : reject(sum);
//   });
//   myPromise
//     .then(() => console.log('Promise resolvida'))
//     .catch(() => console.log('Promise rejeitada'));
// };

// fetchPromise()

// 3. Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
// 4. Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
// 5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const createArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = createArray.map(n => n * n).reduce((sum, n) => sum + n, 0);
    (sum < 9000) ? resolve(sum) : reject(sum);
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then((result) => result.reduce((acc, curr) => acc + curr, 0))
    .then((result) => console.log(`o resultado foi: ${result}`))
    .catch((result) => console.log(`${result} Vegeta, this promise must be broken, the value IT'S OVER NINE THOUSAAAAAAAND!!!!!!1!`));
};

fetchPromise()



