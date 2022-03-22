export function greeter(name: string): string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}
// Usei direto no reducer para relembrar
// export function add(totalAccumulator: number, item: number): number {
//   return totalAccumulator + item;
// }

export function sumArray(numbers: number[]): number {
  return numbers.reduce((accumulator: number, item: number): number => {
    return accumulator + item
  }, 0);
}

[1,2,3].reduce