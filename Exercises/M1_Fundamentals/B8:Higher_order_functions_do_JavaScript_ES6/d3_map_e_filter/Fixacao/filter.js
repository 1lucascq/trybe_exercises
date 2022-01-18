//                    Exemplo 1:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);
// console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]


//                    Exemplo 2:


const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const ableToDrive = objPeople.filter(person => person.age > 17)
console.log(ableToDrive);


//                    Exemplo 2:



const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
  // Esse exemplo deixa o código mais prático e genérico se comparado ao que fiz abaixo).
const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]

// const turist = 'Ricardo';
// const notTuristsStudents = arrayMyStudents.filter(students => students !== turist);
// console.log(notTuristsStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
  // Acho que esse código perde para o outro em função de ser muito específico.
