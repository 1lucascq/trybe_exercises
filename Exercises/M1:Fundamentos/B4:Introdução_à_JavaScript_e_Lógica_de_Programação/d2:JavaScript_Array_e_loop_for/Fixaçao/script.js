//Obtenha o valor "Serviços" do array menu :
let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu1[1];

console.log(menuServices);

//Procure o índice do valor "Portfólio" do array menu :
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2[2];

console.log(indexOfPortfolio);

//Adicione o valor "Contato" no final do array menu :
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push("Contato")

console.log(menu3);

//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i])
}

//Utilize o for/of para imprimir os elementos da lista names com o console.log() :
let listaNomes = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let nome of listaNomes) {
  console.log(nome)
}