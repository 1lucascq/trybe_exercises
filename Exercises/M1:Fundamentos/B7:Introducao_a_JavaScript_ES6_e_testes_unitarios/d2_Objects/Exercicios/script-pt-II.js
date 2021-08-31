const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
console.log('Exercício 1:');
const addMorningShift = (obj, key, value) => obj[key] = value;
addMorningShift(lesson2, 'turno', 'manhã');
console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
console.log('Exercício 2:');
const keys = obj => Object.keys(obj);
console.log(keys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.
console.log('Exercício 3:');
const objLength = obj => Object.keys(obj).length;
console.log(objLength(lesson1));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
console.log('Exercício 4:');
const values = obj =>  Object.values(obj);
console.log(values(lesson1));

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
console.log('Exercício 5:');
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
console.log('Exercício 6:');
function howManyStudents (obj) {
  let totalStudents = 0;
  const allStudents = Object.keys(obj);
  for (let i in allStudents) {
    totalStudents += obj[allStudents[i]].numeroEstudantes;
  }
  return totalStudents
}
console.log(howManyStudents(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
console.log('Exercício 7:');
function getValueByNumber (obj, number) {
  const values = Object.values(obj);
  return values[number];
}
console.log(getValueByNumber(lesson1, 0));


// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
console.log('Exercício 8:');
function verifyPair(obj, key, value) {
  const ar = Object.entries(obj);
  let result = false;
  for (let i in ar) {
    if (ar[i][0] === key && ar[i][1] === value) result = true;
  }
  return result
}
console.log(verifyPair(lesson1, 'turno', 'manhã'));

//                                                    BÔNUS
// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
console.log('Bônus 1:');
function mathStudents(obj) {
  const ar = Object.keys(obj);
  let result = 0;
  for (let i in ar) {
    if (obj[ar[i]].materia === 'Matemática') result += obj[ar[i]].numeroEstudantes;
  }
  return result
}
console.log(mathStudents(allLessons));


// 2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
console.log('Bônus 2:')
const teacherData = (obj, teacher) => {
  const allClasses = [];
  let allStudent = 0;
  const ar = Object.values(obj);
  for (i in ar) {
    if (ar[i].professor === teacher) {
      allClasses.push(ar[i].materia)
      allStudent += ar[i].numeroEstudantes;
    }
  }
  return {lessons: allClasses, estudantes: allStudent};
}

const teacherReport = (obj, name) => {
  const report = Object.assign({}, teacherData(obj, name));
  report.professor = name;
  return report;
}
console.log(teacherReport(allLessons, 'Maria Clara'));