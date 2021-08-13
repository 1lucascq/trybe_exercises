function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
};

createDaysOfTheWeek();

//          Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  // Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  // Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let dezDays = document.querySelector('#days');
for (let day of dezDaysList) {
  let li = document.createElement('li');
  li.innerText = day;
  li.className = 'day';
  if (day === 24 || day === 25 || day === 31) {
    li.className = li.className + ' ' + 'holiday'
  }
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    li.className = li.className + ' ' + 'friday'
  }
  dezDays.appendChild(li);
}


//          Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
  // Adicione a este botão a ID "btn-holiday".
  // Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function criarBotão(feriados) {
  feriados = document.createElement('button');
  feriados.id = 'btn-holiday';
  feriados.innerText = 'Feriados';
  let divButtons = document.querySelector('.buttons-container');
  divButtons.appendChild(feriados);
  
}
criarBotão()

//          Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
  // É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
let feriadosButton = document.querySelector('#btn-holiday');
let holidays = document.querySelectorAll('.holiday');
let backgroundDefaultColor = "rgb(238,238,238)";
let newBackground = 'gold';

feriadosButton.addEventListener('click', function () {
  for (let holiday of holidays) {
    if (holiday.style.backgroundColor === newBackground)
      holiday.style.backgroundColor = backgroundDefaultColor;
    else {
      holiday.style.backgroundColor = newBackground;
    }
  }
})

//          Exercício 4:
//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
  //Adicione a este botão o ID "btn-friday" .
  //Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
  
function criandoSextouButton(sextaFeira) {
  sextaFeira = document.createElement('button');
  sextaFeira.innerText = 'Sexta-Feira';
  sextaFeira.id = 'btn-friday'
  let divButtons = document.querySelector('.buttons-container');
  divButtons.appendChild(sextaFeira);

}
criandoSextouButton()


//          Exercício 5:
//Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
  //É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let sextas = document.getElementsByClassName('friday');
let sextaButton = document.querySelector('#btn-friday');
let sextaText = 'SEXTOUUOU';
let arraySextas = [4, 11, 18, 25]
sextaButton.addEventListener('click', function() {
  for (let sexta = 0; sexta < sextas.length; sexta += 1) {
    if (sextas[sexta].innerHTML !== sextaText){
      sextas[sexta].innerHTML = sextaText;
    } else {
      sextas[sexta].innerHTML = arraySextas[sexta];
    }
  }
})


//          Exercício 6:
//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function zoomIn() {
  let daysArray = document.querySelector('#days');

  daysArray.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '27px';
    event.target.style.fontWeight = '700';
  })
};

function zoomOut() {
  let daysArray = document.querySelector('#days');

  daysArray.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};

zoomIn();
zoomOut();


//          Exercício 7:
//Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
  //O elemento criado deverá ser adicionado como filho da tag <div> que possui a classe "my-tasks".
  
  function addTask(input) {
  let div = document.querySelector('.my-tasks');
  input = document.querySelector('#task-input');
  
  if (input.value.length > 0) {
    let li = document.createElement('li');
    li.innerText = input.value;
    li.innerText += ';';
    div.appendChild(li);
  } else {
    window.alert('Ops... Corrija este compromisso!!')
  }
}
  
function addTaskKeuUp (event) {
  let div = document.querySelector('.my-tasks');
  if (event.key === 'Enter' && input.value.length > 0) {
    let li = document.createElement('li');
    li.innerText = input.value;
    li.innerText += ';';
    div.appendChild(li); 
  }
}
let btnTask = document.querySelector('#btn-add');
let input = document.querySelector('#task-input')
btnTask.addEventListener('click', addTask);
input.addEventListener('keyup', addTaskKeuUp);

//          Exercício 8:
//Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
  //O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
  //O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function addTaskColor(cor) {
  let input = document.querySelector('#task-input');
  if (input.value.length > 0) {
    cor = 'purple';
    let div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = cor;
    let divMain = document.querySelector('.my-tasks');
    divMain.appendChild(div);
  }
}
btnTask.addEventListener('click', addTaskColor)

//          Exercício 9:
//Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.
  //Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
let myTasks = document.querySelector('.my-tasks');
myTasks.addEventListener('click', function(event) {
  let task = event.target;
  if (task.classList.contains('task')) {
    if (task.classList.contains('selected')) {
      task.className = 'task';
    } else {
      task.className = 'task selected';
    }
  }
})


//          Exercício 10:
//Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
  //Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
let ulDays = document.querySelector('#days');
ulDays.addEventListener('click', function(event) {
  let taskSelected = document.querySelector('.selected');
  let color = taskSelected.style.backgroundColor;
  let dia = event.target;
  if (dia.style.color === color) {
    dia.style.color = 'rgb(119,119,119)';
  } else {
    dia.style.color = color;
  }
})

//          BÔNUS
//Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
  //Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
  //Ao pressionar a tecla "enter" o evento também deverá ser disparado.
  //OBS: Exercício bônus integrado ao exercício 7.
