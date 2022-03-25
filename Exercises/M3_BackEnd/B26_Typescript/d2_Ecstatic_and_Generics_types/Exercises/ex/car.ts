enum Color {
  black = 'preto',
  white = 'branco',
}

enum Direction {
  right = 'direita',
  left = 'esquerda',
}

interface Car {
  brand: string,
  color: Color,
  doors: number,
}
class Car {
  constructor (brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): string {
    return 'BEEP BEEP'
  }

  manageDoors(isOpen: boolean): string {
    isOpen = !isOpen
    if (isOpen) return 'portas abertas';
    return 'portas fechadas';
  }

  turnOnAndOff(on: boolean): string {
    on = !on
    if (on) return 'carro ligado';
    return 'carro desligado';
  }

  speedingUp(speedUp: boolean): string {
    if (speedUp) return 'tacale pau marcos';
    return 'desacelerando';
  }

  doBrake(): string {
    return 'PERAE PARO'
  }

  turn(direction: Direction): string {
    if (direction === 'direita') return 'virando pra direita'
    if (direction === 'esquerda') return 'virando pra esquerda'
    return 'direita ou esquerda'
  }
}

const FuscaoPreto = new Car('VW', Color.black, 4)
console.log(FuscaoPreto.speedingUp(true))
console.log(FuscaoPreto.turn(Direction.left))
console.log(FuscaoPreto.turn(Direction.right))
console.log(FuscaoPreto.speedingUp(true))
console.log(FuscaoPreto.turn(Direction.right))
console.log(FuscaoPreto.turn(Direction.right))
console.log(FuscaoPreto.doBrake())
console.log(FuscaoPreto.honk())


