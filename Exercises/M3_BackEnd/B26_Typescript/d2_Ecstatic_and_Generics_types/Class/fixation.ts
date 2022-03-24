type Bird = {
  specie: 'with wings';
  name: 'passarin'
}

type Sum = (
  x: number,
  y: number,
) => number;

type MaterType = 'solid' | 'liquid' | 'gaseous';

type OS = 'linux' | 'windows';

type CPF = '123.567.890-12' | '123456789012';


enum Size {
  small = 's',
  medium = 'm',
  big = 'b'
}
interface Dog {
  name: string,
  size: Size,
  color: string
}
class Dog {
  constructor (name: string, size: Size, color: string) {
    this.name = name;
    this.size = size;
    this.color = color;
  }

  bark(): string {
    if (this.size === 's') return `${this.name} says: auau in ${this.color}`
    if (this.size === 'm') return `${this.name} says: AUAU in ${this.color}`
    if (this.size === 'b') return `${this.name} says: AUAUAUAUAUAUAUAU in ${this.color}`
    return 'This dog doesn\'t bark'
  }
}
const pudou = new Dog('Pudo', Size.small, 'white')
const pluto = new Dog('Pluto', Size.medium, 'yellow')
const brazilianViraLata = new Dog('Caramelo', Size.big, 'caramelês')

console.log(pudou.bark())
console.log(brazilianViraLata.bark())
console.log(pluto.bark())




