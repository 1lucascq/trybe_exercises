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
for (let i3 = 0; i3 < numbers.length; i3 += 1) {
  soma3 += numbers[i3];
}
console.log(soma3 / numbers.length)

//4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20,
//imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
for (let i3 = 0; i3 < numbers.length; i3 += 1) {
  soma3 += numbers[i3];
} 
if (soma3 > 20) {
  console.log("O valor é maior que 20!!!")
}
else {
  console.log("O valor é menor ou igual a 20!!!")
}

//5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for (let i5 = 0; i5 < numbers.length; i5 += 1) {
  if (numbers[i5] > maior) {
    maior = numbers[i5]
  }
}

console.log(maior)

//6. Descubra quantos valores ímpares existem no array e imprima o resultado.
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impares = 0;
for (let i6 = 0; i6 < numbers.length; i6 += 1) {
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
let menor = 9999
for (let i7 = 0; i7 < numbers.length; i7 += 1) {
  if (numbers[i7] < menor) {
    menor = numbers[i7]
  }
}

console.log(menor)

//8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array8 = [];
for (i8 = 1; i8 < 26; i8 += 1) {
  array8.push(i8)
}
console.log(array8)

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let array9 = [];
for (let i9 = 1; i9 < array8.length; i9 += 1) {
  array9.push(array8[i9] / 2)
}
console.log(array9)




//      BÔNUS
//1. Ordene o array numbers em ordem crescente e imprima seus valores;
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log([numbers])


//2. Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log([numbers])


//3. Agora crie um novo array a partir do array numbers, sem perdê-lo.
//Cada valor do novo array deverá ser igual ao valor correspondente no
//array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor
//do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor)
//e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, poi
//é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante.
//Caso não haja próximo valor, a multiplicação deverá ser feita por 2.
//Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
console.log("ÚLTIMO EXERCÍCIO")

let originalNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lastArrayForToday = [];
for (let index = 0; index < originalNumbers.length; index += 1) {
  if (index + 1  === originalNumbers.length) {
      lastArrayForToday.push(originalNumbers[index] * 2)
    }
    else {
    lastArrayForToday.push(originalNumbers[index] * originalNumbers[index + 1])
    }
}
console.log(lastArrayForToday)
