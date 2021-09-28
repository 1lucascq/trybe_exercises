const pixelBoard = document.querySelector('#pixel-board');

function paint(e) {
  const selectedColor = document.querySelector('.selected');
  e.target.style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
}

function createBoard() {
  const boardSize = 5;
  pixelBoard.style.gridTemplateColumns = `repeat(${boardSize}, 40px)`;
  for (let i = 0; i < boardSize; i += 1) {
    for (let j = 0; j < boardSize; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paint);
      pixelBoard.appendChild(pixel);
    }
  }
}

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

window.onload = function load() {
  const blackColor = document.querySelector('#black');
  blackColor.className = 'color selected';

  const colorPalette = document.getElementsByClassName('color');
  for (let i = 1; i < colorPalette.length; i += 1) {
    colorPalette[i].style.backgroundColor = randomRGB();
  }
  randomRGB();
  createBoard();
};

function deleteBoard() {
  const pixelsToDelete = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelsToDelete.length; i += 1) {
    console.log(pixelsToDelete[i]);
    pixelsToDelete[i].remove();
  }
}

const inputBoardSize = document.querySelector('#board-size');
function createNewBoard() {
  deleteBoard();
  let boardSize = inputBoardSize.value;
  if (inputBoardSize.value < 5) {
    boardSize = 5;
  }
  if (inputBoardSize.value > 50) {
    boardSize = 50;
  }
  console.log(boardSize);
  pixelBoard.style.gridTemplateColumns = `repeat(${boardSize}, 40px)`;
  for (let i = 0; i < boardSize; i += 1) {
    for (let j = 0; j < boardSize; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paint);
      pixelBoard.appendChild(pixel);
    }
  }
}

function newBoardSize() {
  if (inputBoardSize.value === '') {
    alert('Board Inválido!');
  } else {
    createNewBoard();
  }
}

const btnBoardSize = document.getElementById('generate-board');
btnBoardSize.addEventListener('click', newBoardSize);

const colorPalette = document.getElementsByClassName('color');
function selectionFunction(e) {
  for (let i = 0; i < colorPalette.length; i += 1) {
    if (colorPalette[i].classList.contains('selected')) {
      colorPalette[i].classList.toggle('selected');
    }
  }
  e.target.classList.toggle('selected');
}
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].addEventListener('click', selectionFunction);
}

const pixels = document.getElementsByClassName('pixel');
function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
const button = document.querySelector('#clear-board');
button.addEventListener('click', clearBoard);
