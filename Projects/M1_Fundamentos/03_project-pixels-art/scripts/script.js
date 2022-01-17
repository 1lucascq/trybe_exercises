const pixelBoard = document.querySelector('#pixel-board');

// Tools

let eraser = false;
let paintBucket = false;

const eraserEl = document.querySelector('#eraser');
eraserEl.addEventListener('click', () => {
  eraser = true;
  paintBucket = false;
});
const paintBucketEl = document.querySelector('#paint-bucket');
paintBucketEl.addEventListener('click', () => {
  eraser = false;
  paintBucket = true;
});
const paintBrushEl = document.querySelector('#paint-brush');
paintBrushEl.addEventListener('click', () => {
  eraser = false;
  paintBucket = false;
});

const toolsItems = document.getElementsByClassName('tool');
const SELECTED_TOOL = 'selected-tool';
function selectTool(e) {
  for (let i = 0; i < toolsItems.length; i += 1) {
    if (toolsItems[i].classList.contains(SELECTED_TOOL)) {
      toolsItems[i].classList.toggle(SELECTED_TOOL);
    }
  }
  e.target.classList.toggle(SELECTED_TOOL);
}

for (let i = 0; i < toolsItems.length; i += 1) {
  toolsItems[i].addEventListener('click', selectTool);
}

// Paint Functions && Board Creator

let doDraw = false;

function drawToFalse() {
  doDraw = false;
}

function drawToTrue() {
  doDraw = true;
}

window.addEventListener('mousedown', drawToTrue);
window.addEventListener('mouseup', drawToFalse);

function mainAction(e) {
  const selectedColor = document.querySelector('.selected');

  if (eraser) {
    e.target.style.backgroundColor = '#FFFFFF';
    return '';
  }

  if (paintBucket) {
    console.log(paintBucket);
    const allPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < allPixels.length; i += 1) {
      const pixel = allPixels[i];
      pixel.style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
    }
    return '';
  }

  e.target.style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
}

function mouseDownPaint(e) {
  if (doDraw === false) return '';
  mainAction(e);
}

function createBoard() {
  const DEFAULT_BOARDSIZE = 10;
  pixelBoard.style.gridTemplateColumns = `repeat(${DEFAULT_BOARDSIZE}, 40px)`;
  for (let i = 0; i < DEFAULT_BOARDSIZE; i += 1) {
    for (let j = 0; j < DEFAULT_BOARDSIZE; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', mainAction);
      pixel.addEventListener('mouseover', mouseDownPaint);
      pixelBoard.appendChild(pixel);
    }
  }
}

// Load && Delete Board

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

window.onload = function load() {
  const blackColor = document.querySelector('#black');
  blackColor.className = 'color selected';
  paintBrushEl.className = 'tool selected-tool';

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
  pixelBoard.style.gridTemplateColumns = `repeat(${boardSize}, 40px)`;
  for (let i = 0; i < boardSize; i += 1) {
    for (let j = 0; j < boardSize; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', mainAction);
      pixel.addEventListener('mouseover', mouseDownPaint);
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

// Toggle Selected Color

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

// Clear Btn

const pixels = document.getElementsByClassName('pixel');
function clearBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
const button = document.querySelector('#clear-board');
button.addEventListener('click', clearBoard);
