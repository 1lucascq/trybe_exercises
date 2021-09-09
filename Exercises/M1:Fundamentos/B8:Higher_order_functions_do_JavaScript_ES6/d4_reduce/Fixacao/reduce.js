//          Soma de todos os valores de um array usando o --> FOR:
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbersWithFor = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbersWithFor += numbers[index];
}
console.log(sumNumbersWithFor); // 113

//          Soma de todos os valores de um array usando o --> .reduce:

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// Ou seja:

const sumNumbers = numbers.reduce((result, number) => result + number);
console.log(sumNumbers); // 113


//          Maior valor em um array --> .reduce:

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce((bigger, number) => ((bigger > number) ? bigger : number), 0);
console.log(bigger); // 85


//          Soma dos números pares em um array --> .reduce:


const moreNumbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const evenNumbersSum = moreNumbers.filter(num => num % 2 === 0).reduce((result, number) => result + number);
console.log(evenNumbersSum)

//           Usando apenas o .reduce:
// const moreNumbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const sumPair = (currentValue, number) => (
//   (number % 2 === 0) ? currentValue + number : currentValue
// );
// const sumNumbers = (array) => array.reduce(sumPair, 0);
// console.log(sumNumbers(moreNumbers)); // 152


//          Função que mostra qual matéria o estudante foi melhor:
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const bestGrades = estudantes.map((student) => ({
  nome: student.nome,
  materia: student.materias.reduce((acc, current) => (acc.nota > current.nota) ? acc : current)
}));
console.log(bestGrades);
