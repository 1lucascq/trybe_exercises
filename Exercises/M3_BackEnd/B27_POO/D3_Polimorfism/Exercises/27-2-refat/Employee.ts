// course
import Person from "./Person";

export default class Employee extends Person implements Enrollable{
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;
  
  get salary() {
    return this._salary
  }

  set salary(value) {
      if(value > 0) {
        this._salary = value;
      }
      throw new Error('Salário tá baixo')
  }

  get admissionDate() {
    return this._admissionDate
  }

  set admissionDate(value) {
      if(new Date(value).getTime() < Date.now()) {
        this._admissionDate = value;
      }
      throw new Error('check the date')
  }

  get enrollment() {
    return this._enrollment
  }

  set enrollment(value) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    this._enrollment = value;
  }

  generateRegistration(): string {
    return 
  }
  
  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `FUNC${randomStr}`;
  }  
}
