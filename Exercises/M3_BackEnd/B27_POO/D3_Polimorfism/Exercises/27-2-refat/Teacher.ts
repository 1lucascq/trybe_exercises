import Employee from "./Employee";
import Person from "./Person";
import Subject from "./Subject";
// `Class`: Teacher
// `Extends`: Person
// `Implements`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina
// `Validations`:
//     - O registro deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

class Teacher extends Employee {
  private _admissionDate: Date;
  private _registration: string;
  private _salary: number;
  private _subject: Subject;

  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    subject: Subject
    ) {
    super(name, birthDate);
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
    this._salary = salary;
  }
  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(v: Date) {
    if (Date.now() < v.getTime()) this._admissionDate = v;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(v: string) {
    if (v.length < 16) throw new Error("registro mto pequeno");
    this._registration = v;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(v: number) {
    if (v < 3000) throw new Error("salário mto baixo");
    this._salary = v;
  }

  generateRegistration(): string {
    return "1234567890123456";
  }
}

// Para testar!
// ./index.ts

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);

// deve retornar erro
//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);

// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;