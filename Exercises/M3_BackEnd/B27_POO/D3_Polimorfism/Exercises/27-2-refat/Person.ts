// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e a data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo 3 caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

export default abstract class Person {
  private _name: string = String();
  private _birthDate: Date = new Date();
  constructor(name:string, birthDate:Date) {
    this.name = name
    this.birthDate = birthDate
  }
  
  get name() {
    return this._name;
  }

  set name(name:string) {
    if (name.length < 3) {
      throw new Error('nome tem que ser >= 3')
    }
    this._name = name
  }

  get birthDate():Date {
    return this._birthDate;
  }

  set birthDate(birthDate:Date) {
    this.validateBirthDate(birthDate)
    this._birthDate = birthDate;
}

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
}

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
}

}
