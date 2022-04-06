abstract class Animal_B {
  constructor(public name: string) { }
  abstract move_B(): void
}
class Bird_B extends Animal_B {
  move_B() { console.log(`${this.name} está voando.`); }
}
class Mammal_B extends Animal_B {
  move_B() { console.log(`${this.name} está andando.`); }
}
class Fish_B extends Animal_B {
  move_B() { console.log(`${this.name} está nadando.`); }
}

const a_B = new Fish_B('Tubarão');
const b_B = new Bird_B('Papagaio');
const m_B = new Mammal_B('Tatu');

const myMove_B = (animal: Animal_B) => {
  animal.move_B();
}
myMove_B(a_B);
myMove_B(b_B);
myMove_B(m_B);

/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/