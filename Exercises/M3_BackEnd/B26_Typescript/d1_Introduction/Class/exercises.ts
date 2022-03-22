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

// Treinando reduce e ts:
interface IPeople { name: string, age: number }
const people: IPeople[] = [
  {name: 'ze', age: 20},
  {name: 'jao', age: 20},
  {name: 'ana', age: 22},
  {name: 'lau', age: 22}
]

interface IGroupOfPeople { [key:number]: IPeople[] }
people.reduce((groupOfPeople: any, person: IPeople) => {
  const age: number = person.age;
  if (!groupOfPeople[age]) groupOfPeople = [];
  groupOfPeople.push(person)
  return groupOfPeople
}, {})

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}