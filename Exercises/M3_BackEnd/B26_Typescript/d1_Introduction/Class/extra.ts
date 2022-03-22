/*
1: Crie uma nova função para calcular a área do losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) com a diagonal menor (d) dividido por dois. (D * d) / 2
  Calcule a área de um losango que tem D = 32cm e d = 18cm;
  Calcule a área de um losango que tem D = 200cm e d = 50cm;
*/
function calcArea(D: number, d: number) {
  return (d * D) / 2
}
console.log(`A área do losango que tem D = ${32}cm e d=${18}cm é: ${calcArea(32, 18)}`)
console.log(`A área do losango que tem D = ${200}cm e d=${50}cm é: ${calcArea(200, 50)}`)
/*
2:Crie uma nova função para calcular a área do trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. ((B + b) * h) / 2
  Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm;
  Calcule a área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm;
*/
function calcTrap(B: number, b: number, h: number) {
  return ((B * b) / h)
}
console.log(`A área do trapézio que tem B = ${100}cm, b=${70}cm e h=${50}cm é: ${calcTrap(32, 18, 50)}`)
console.log(`A área do trapézio que tem B = ${75}cm, b=${50}cm e h=${35}cm é: ${calcTrap(32, 18, 50)}`)

/*
3: Crie uma nova função para calcular a área do círculo. A área do círculo de raio r é dada pelo produto do raio ao quadrado com o número irracional ℼ (em geral utilizamos o valor ℼ = 3,14). PI * r²
  Calcule a área de um círculo de raio igual 25cm;
  Calcule a área de um círculo de raio igual 100cm;
  Calcule a área de um círculo de raio igual 12,5cm.
*/
function calcCirc(r: number) {
  return (3.14 * (r ** 2))
}
console.log(`A área do trapézio que tem r = ${25}cm é: ${calcCirc(25)}`)
console.log(`A área do trapézio que tem r = ${12.5}cm é: ${calcCirc(12.5)}`)
