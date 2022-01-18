// As pessoas devem ter o poder de alterar:
  // Cor de fundo da tela;
  // Cor do texto;
  // Tamanho da fonte;
  // Espaçamento entre as linhas do texto;
  // Tipo da fonte ( Font family ).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
window.onload = function() {
  const savedDarkMode = localStorage.getItem('darkMode');
  document.body.classList = savedDarkMode;

  const savedFontColor = localStorage.getItem('fontColor');
  document.body.style.color = savedFontColor;

  const savedFontSize = localStorage.getItem('fontSize');
  document.body.style.fontSize = savedFontSize;

  const savedLetterSpacing = localStorage.getItem('letterSpacing');
  document.body.style.letterSpacing = savedLetterSpacing;

  const savedFontFamily = localStorage.getItem('fontFamily');
  document.body.style.fontFamily = savedFontFamily;
}

const darkModeBtn = document.getElementById('darkModeBtn');
const color = document.getElementById('color');
const fontSize = document.getElementById('fontSize');
const theLetterSpacing = document.getElementById('letterSpacing');
const fontFamily = document.getElementById('fontFamily');
const body = document.body
const colorBtn = document.getElementById('sendColor');
const fontSizeBtn = document.getElementById('sendFontSize');
const letterSpacingBtn = document.getElementById('sendLetterSpacing');
const fontFamilyBtn = document.getElementById('sendFontFamily');

function darkModeOn() {
  body.classList.toggle('darkMode');
  localStorage.setItem('darkMode', body.classList);
}
darkModeBtn.addEventListener('click', darkModeOn);


function changeColor() {
  body.style.color = color.value;
  localStorage.setItem('fontColor', color.value);

}
colorBtn.addEventListener('click', changeColor);


function changeFontSize() {
  const fontSizePx = fontSize.value + 'px';
  body.style.fontSize = fontSizePx;
  localStorage.setItem('fontSize', fontSizePx);
}
fontSizeBtn.addEventListener('click', changeFontSize);


function changeLetterSpacing() {
  const theLetterSpacingPx = theLetterSpacing.value + 'px';
  body.style.letterSpacing = theLetterSpacingPx;
  localStorage.setItem('letterSpacing', theLetterSpacingPx);
}
letterSpacingBtn.addEventListener('click', changeLetterSpacing);


function changeFontFamily() {
  body.style.fontFamily = fontFamily.value;
  localStorage.setItem('fontFamily', fontFamily.value);
}
fontFamilyBtn.addEventListener('click', changeFontFamily);

