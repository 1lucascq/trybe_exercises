//                              .find
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

//           --> Com função definida
const findDivisibleBy3And5 = (n) => {
  // Adiciona seu código aqui
  if (n % 3 === 0 && n % 5 === 0) return n;
}
// console.log(numbers.find(findDivisibleBy3And5))

//          --> Com arrow function
console.log(numbers.find(n => n % 3 === 0 && n % 5 === 0));

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

//          --> Com função definida
const findNameWithFiveLetters = (e) => {
  // Adicione seu código aqui:
  if (e.length === 5) return e;
}

console.log(names.find(findNameWithFiveLetters));

// 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const musica = '31031685';
console.log(musicas.find(e => e.id === musica));