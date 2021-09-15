const loginBtn = document.getElementById('login-btn');
const emailUser = document.getElementById('email');
function logBtn() {
  if (emailUser.value === 'tryber@teste.com') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginBtn.addEventListener('click', logBtn);

const submitBtn = document.getElementById('submit-btn');
const agreementCheck = document.getElementById('agreement');

function enableBtn() {
  if (agreementCheck.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agreementCheck.addEventListener('click', enableBtn);

const commentsTextArea = document.getElementById('textarea');
const commentsCounter = document.getElementById('counter');
const maxValueCounter = 500;

commentsTextArea.addEventListener('input', () => {
  const remaining = maxValueCounter - commentsTextArea.value.length;
  commentsCounter.textContent = remaining;
  if (remaining < 50) {
    commentsCounter.style.color = 'rgb(167, 50, 50)';
  } else {
    commentsCounter.style.color = 'rgb(123, 120, 120)';
  }
});

function userFamily() {
  const family = document.querySelector('input[name="family"]:checked');
  if (!family) {
    alert('Escolha uma família!');
    return '';
  }
  return family.value;
}

function userSubject() {
  const subjects = document.querySelectorAll('input[name="subject"]:checked');
  const selectedSubjects = [];
  for (let i = 0; i < subjects.length; i += 1) {
    selectedSubjects.push(subjects[i].value);
  }
  if (!subjects) {
    alert('Escolha uma família!');
    return '';
  }
  const selectedSubjectsStringed = selectedSubjects.join(', ');
  return selectedSubjectsStringed;
}

function userEvaluation() {
  const rate = document.querySelector('input[name="rate"]:checked');
  if (!rate) {
    alert('Escolha uma nota!');
    return '';
  }
  return rate.value;
}

const evaluationForm = document.getElementById('evaluation-form');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');

function getData() {
  const userOptions = {
    family: userFamily(),
    subject: userSubject(),
    evaluation: userEvaluation(),
  };
  return userOptions;
}

function infoElements(label, value) {
  const p = document.createElement('p');

  p.innerText = `${label}: ${value}`;

  return p;
}

function showForm(userOptions) {
  const family = infoElements('Família', userOptions.family);
  const subjects = infoElements('Matérias', userOptions.subject);
  const evaluation = infoElements('Avaliação', userOptions.evaluation);

  evaluationForm.appendChild(family);
  evaluationForm.appendChild(subjects);
  evaluationForm.appendChild(evaluation);
}

function rFullName() {
  const pFullName = document.createElement('p');
  pFullName.innerText = `Nome: ${firstName.value} ${lastName.value}`;
  evaluationForm.appendChild(pFullName);
}

function rEmail() {
  const pEmail = document.createElement('p');
  pEmail.innerText = `Email: ${email.value}`;
  evaluationForm.appendChild(pEmail);
}

function rHouse() {
  const pHouse = document.createElement('p');
  pHouse.innerText = `Casa: ${house.value}`;
  evaluationForm.appendChild(pHouse);
}

function rObservations() {
  const pObservations = document.createElement('p');
  pObservations.innerText = `Observações: ${commentsTextArea.value}`;
  evaluationForm.appendChild(pObservations);
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const userOptions = getData();

  evaluationForm.innerHTML = '';
  rFullName();
  rEmail();
  rHouse();
  showForm(userOptions);
  rObservations();
});
