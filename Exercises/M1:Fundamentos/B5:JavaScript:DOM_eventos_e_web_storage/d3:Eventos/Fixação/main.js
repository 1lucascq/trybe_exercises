const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

//
//  1. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
//  Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function newTech(event) {
  let elementoTech = document.querySelector('.tech');
  elementoTech.classList.remove('tech');
  event.target.classList = 'tech';
}
firstLi.addEventListener('click', newTech);
secondLi.addEventListener('click', newTech);
thirdLi.addEventListener('click', newTech);

//  2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
//  com a classe 'tech';
function changeTech(event) {
  let textoTech = document.querySelector('.tech');
  textoTech.innerText = event.target.value;
}
input.addEventListener('click', changeTech);



//  3. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
//  redirecione para alguma página - Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function(event) {
  console.log(event.target)
  window.location.replace('https://www.google.com')
})

//  4. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
//  a cor do mesmo;
function changeColor(event) {
  event.target.style.color = 'grey';
}
myWebpage.addEventListener('mouseover', changeColor);

function changeColorBack(event) {
  event.target.style.color = 'unset';
}
myWebpage.addEventListener('mouseout', changeColorBack);


//  Exemplos:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.