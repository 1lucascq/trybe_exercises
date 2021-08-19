const nome = document.querySelector('[name=nome]');
const email = document.querySelector('[name=email]');
const cpf = document.querySelector('[name=cpf]');
const endereco = document.querySelector('[name=endereco]');
const cidade = document.querySelector('[name=cidade]');
const estado = document.querySelector('[name=estado]');
const curriculo = document.querySelector('[name=curriculo]');
const cargo = document.querySelector('[name=cargo]');
const descricao = document.querySelector('[name=descricao]');
const residencia = document.querySelector('[name=residencia]'); 

function criarEstados() {
  const addEstados = ['AC','MG','AL','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
  for (let i = 0; i < addEstados.length; i += 1) {
    let estadoOption = document.createElement('option');
    estadoOption.value = addEstados[i];
    estadoOption.innerText = addEstados[i];
    estado.appendChild(estadoOption);
  }
}

function validarNome() {
  if (nome.value.length > 40) {
    alert('Campo NOME muito longo!')
  }
  if (nome.value === null || nome.value === undefined || nome.value.length === 0) {
    alert('Confira o campo NOME!')
  }
}

function validarEmail() {
  if (email.value.length > 50) {
    alert('Campo EMAIL muito longo!')
  }
  if (email.value === null || email.value === undefined || email.value.length === 0) {
    alert('Confira o campo EMAIL!')
  }
}

function validarCpf() {
  if (cpf.value.length > 11) {
    alert('Campo CPF muito longo!')
  }
  if (cpf.value === null || cpf.value === undefined || cpf.value.length === 0) {
    alert('Confira o campo CPF!')
  }
}

function validarEndereco() {
  if (endereco.value.length > 200) {
    alert('Campo ENDEREÇO muito longo!')
  }
  if (endereco.value === null || endereco.value === undefined || endereco.value.length === 0) {
    alert('Confira o campo ENDEREÇO!')
  }
}

function validarCidade() {
  if (cidade.value.length > 28) {
    alert('Campo CIDADE muito longo!')
  }
  if (cidade.value === null || cidade.value === undefined || cidade.value.length === 0) {
    alert('Confira o campo CIDADE!')
  }
}

function validarCurriculo() {
  if (curriculo.value.length > 1000) {
    alert('Campo RESUMO DO CURRÍCULO muito longo!')
  }
  if (curriculo.value === null || curriculo.value === undefined || curriculo.value.length === 0) {
    alert('Confira o campo RESUMO DO CURRÍCULO!')
  }
}

function validarDescricao() {
  if (descricao.value.length > 500) {
    alert('Campo DESCRIÇÃO DO CARGO muito longo!')
  }
  if (descricao.value === null || descricao.value === undefined || descricao.value.length === 0) {
    alert('Confira o campo DESCRIÇÃO DO CARGO!')
  }
}

function validarCargo() {
  if (cargo.value.length > 40) {
    alert('Campo CARGO muito longo!')
  }
  if (cargo.value === null || cargo.value === undefined || cargo.value.length === 0) {
    alert('Confira o campo CARGO!')
  }
}

function validarResidencia() {
  const apt = document.getElementById('apt');
  const casa = document.getElementById('casa');
  if (casa.checked === false && apt.checked === false) {
    alert('Confira o campo TIPO DE RESIDÊNCIA!')
  }
}

function validarData () {
  const data = document.getElementById('dataInicio').value;
  const dia = parseInt(data.substring(0,2)) || '';
  const mes = parseInt(data.substring(3,5)) || '';
  const ano = parseInt(data.substring(6,10)) || '';
  if (data.length !== 10) {
    alert('Data incompleta!')
  }
  if (typeof(dia) !== 'number' || typeof(mes) !== 'number' || typeof(ano) !== 'number') {
    alert('O formato da data deve ser numérico')
  }

  if (!(dia > 0 || dia <= 31)) {
    alert('Confira o dia do início do trabalho!');
  }
  if (mes < 0 || mes > 12) {
    alert('Confira o mes do início do trabalho!');
  }
  if (ano < 0) {
    alert('Confira o ano do início do trabalho!');
  }
}

window.onload = () => {
  criarEstados()
  
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    validarData();

    validarCargo();

    validarCidade();
    
    validarCpf();

    validarCurriculo();

    validarEmail();

    validarDescricao();

    validarNome();

    validarResidencia();

    validarEndereco();
  })

}
