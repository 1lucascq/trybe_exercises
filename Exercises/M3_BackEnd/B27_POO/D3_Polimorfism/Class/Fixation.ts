// Para fixar
// Suponha que você está modelando os personagens do jogo de luta multijogadores Super Smash Bros . No jogo, há personagens de alcances variados e movimentos especiais variados; vence a pessoa que acumulou mais pontos na partida.
// Crie uma classe abstrata Character que tenha os métodos abstratos talk(): void e specialMove(): void .
// Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
// Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
// Crie uma função que receba como parâmetro character: Character e chame os métodos talk e specialMove para apresentar o personagem.

abstract class Character {
  constructor() {}
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void { console.log('Blablabla de perto') }
  specialMove(): void { console.log('dar porrada') }
}

class LongRangedCharacter extends Character {
  talk(): void { console.log('Blablabla de longe') }
  specialMove(): void { console.log('jogar pedra') }
}
function displayCharacter(character: Character):void {
  console.log(character.specialMove())
  console.log(character.talk())
}