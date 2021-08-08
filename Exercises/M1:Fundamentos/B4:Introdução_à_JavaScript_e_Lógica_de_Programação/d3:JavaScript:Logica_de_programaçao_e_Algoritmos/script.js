//      FIXAÇÃO
//Utilizando o array abaixo, percorra-o somando todos os valores.
//Caso o valor final seja maior que 15, imprima-o.
//Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":
let fruits = [3, 4, 10, 1, 12];
let soma = 0;
for (let i = 0; i < fruits.length; i += 1) {
  soma += fruits[i]
} if (soma > 15) {
  console.log("A soma é", soma);
} else {
  console.log("Valor menor que 16");
}

//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
//seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
console.log("Exercício 1")

let tamanhoQuadrado = 3;
let asterisco = "*";
let resultado = "";
if (tamanhoQuadrado > 1) {
  for (let i1 = 0; i1 < tamanhoQuadrado; i1 += 1) {
    resultado = resultado + asterisco
  }

  for (let i1 = 0; i1 < tamanhoQuadrado; i1 += 1) {
    console.log(resultado)
  }
}


//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo
//com 5 asteriscos de base.
console.log("Exercício 2")

let triangulo = 5;
let resultado2 = "";
let asterisco2 = "*"
for (let i2 = 0; i2 < triangulo; i2 += 1) {
  resultado2 = resultado2 + asterisco2
  console.log(resultado2)
}


//3- Agora inverta o lado do triângulo.:
console.log("Exercício 3")

let trianguloInv = 5;
let asterisco3 = "*";
let resultado3 = "";
let espacos = trianguloInv;

for (let numeroLinhas = 0; numeroLinhas <= trianguloInv; numeroLinhas += 1) {
  for (let colocarEspacos = 0; colocarEspacos <= trianguloInv; colocarEspacos += 1) {
    if (colocarEspacos <= espacos) {
      resultado3 = resultado3 + " "
    } else {
      resultado3 = resultado3 + asterisco3
    }
  }
console.log(resultado3)
resultado3 = "";
espacos -= 1
}


//4- Depois, faça uma pirâmide com n asteriscos de base:
console.log("Exercício 4")


let piramide = 5;
let asterisco4 = "*";
let resultado4 = "";
let meio = (piramide + 1) / 2;
let espacosE = meio;
let espacosD = meio;


for (let numeroLinhas = 0; numeroLinhas <= meio; numeroLinhas += 1) {
  for (let i = 0; i <= piramide; i += 1) {
    if (i > espacosE && i < espacosD) {
      resultado4 = resultado4 + asterisco4
    } else {
      resultado4 = resultado4 + " "
    }
  }
  console.log(resultado4)
  resultado4 = "";
  espacosD += 1
  espacosE -= 1
}


//      BÔNUS
// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
console.log("Exercício 5")


let piramideVazia = 9;
let asterisco5 = "*";
let resultado5 = "";
let meio2 = (piramideVazia + 1) / 2;
let espacosE2 = meio2 - 1;
let espacosD2 = meio2 - 1;


for (let numeroLinhas = 0; numeroLinhas < meio2; numeroLinhas += 1) {
  for (let i = 0; i < piramideVazia; i += 1) {
    if (i === espacosE2 || i === espacosD2 || numeroLinhas === meio2 - 1) {
      resultado5 = resultado5 + asterisco5
    } else {
      resultado5 = resultado5 + " "
    }
  }
  console.log(resultado5)
  resultado5 = "";
  espacosD2 += 1
  espacosE2 -= 1
}


//6- Faça um programa que diz se um número definido numa variável é primo ou não.
// console.log("Exercício 6")

// let ehPrimoOuNao = 7;
// let resultado6 = 0;
// for (let i6 = 0; i6 <= ehPrimoOuNao; i6 += 1) {
//   if (ehPrimoOuNao % i6 === 0) {
//     resultado6 += 1;
//   }
// }
// console.log(resultado6)