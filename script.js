const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const colorPicker = document.getElementById('colorPicker');
let gridSize = parseInt(sizeSlider.value);
let squareSize = 480 / gridSize;
let currentColor = "#000000";

function createGrid() {
  clearGrid();
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);
    container.appendChild(square);
  }

  squareSize = 480 / gridSize;
  const squares = container.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
  });
}

function clearGrid() {
  container.innerHTML = "";
}

function changeColor(event) {
  const square = event.target;
  if (typeOfButton === "Color") {
    square.style.background = currentColor;
  } else if (typeOfButton === "Rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    square.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (typeOfButton === "Eraser") {
    square.style.background = "white";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    typeOfButton = button.id;
    if (button.id === "Clear") {
      clearGrid();
      createGrid();
    }
  });
});

sizeSlider.addEventListener("input", () => {
  gridSize = parseInt(sizeSlider.value);
  sizeValue.textContent = `${gridSize}x${gridSize}`;
  createGrid();
});

colorPicker.addEventListener("input", (event) => {
  currentColor = event.target.value;
});

window.onload = () => {
  createGrid();
};

// Additional code
let typeOfButton = "Color";

