import Employee from "./Employee";
import Subject from "./Subject";

export default class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary);
    this._subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  get subject() {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
}
}

// Para testar!
// ./index.ts

const math = new Subject("Matemática");
const history = new Subject("História");
const philosophy = new Subject("Filosofia");

const marta = new Teacher("Marta da Silva", new Date("1980/03/30"), 2000, math);
const joao = new Teacher(
  "João Antônio da Costa",
  new Date("1982/04/21"),
  2000,
  history
);
const lucio = new Teacher(
  "Lucio Teixeira",
  new Date("1986/01/29"),
  2000,
  philosophy
);

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
