//      FIXAÇÃO
//Obtenha o valor "Serviços" do array menu :
let menu1 = ["Home", "Serviços", "Portfólio", "Links"];
let menuServices = menu1[1];

console.log(menuServices);

//Procure o índice do valor "Portfólio" do array menu :
let menu2 = ["Home", "Serviços", "Portfólio", "Links"];
let indexOfPortfolio = menu2[2];

console.log(indexOfPortfolio);

//Adicione o valor "Contato" no final do array menu :
let menu3 = ["Home", "Serviços", "Portfólio", "Links"];
menu3.push("Contato");

console.log(menu3);

//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}

//Utilize o for/of para imprimir os elementos da lista names com o console.log() :
let listaNomes = ["João", "Maria", "Antônio", "Margarida"];
for (let nome of listaNomes) {
  console.log(nome);
}

//      EXERCÍCIOS PRÁTICOS
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let i1 = 0; i1 < numbers.length; i1 += 1) {
  console.log(numbers[i1]);
}

//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let i2 = 0; i2 < numbers.length; i2 += 1) {
  soma += numbers[i2];
}
console.log(soma)


//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let soma3 = 0;
for (i3 = 0; i3 < numbers.length; i3 += 1) {
  soma3 += numbers[i3];
}
console.log(soma3 / numbers.length)

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20,
//imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
for (i3 = 0; i3 < numbers.length; i3 += 1) {
  soma3 += numbers[i3];
} 
if (soma3 > 20) {
  console.log("O valor é maior que 20!!!")
}
else {
  console.log("O valor é menor ou igual a 20!!!")
}

//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior5 = 0;
for (i5 = 0; i5 < numbers.length; i5 += 1) {
  if (numbers[i5] > maior5) {
    maior5 = numbers[i5]
  }
}

console.log(maior5)

//6. Descubra quantos valores ímpares existem no array e imprima o resultado.
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impares = 0;
for (i6 = 0; i6 < numbers.length; i6 += 1) {
  if (numbers[i6] % 2 != 0) {
    impares += 1
  }
}
if (impares > 0) {
  console.log("Existem " + impares + " números ímpares!!!1")
}
else {
  console.log("Nenhum valor ímpar encontrado!!!")
}

//7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;


//8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;


//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
