const container = document.querySelector(".container")
const buttons = document.querySelectorAll("button")
const gridSize = 16;
const squareSize = 30;

function createGrid() {
  for (let i = 0; i < gridSize; i++){
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", changeColor)
      container.appendChild(square);
      
    }
  }
}

function clearGrid() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.style.background = "white";
  });
  
};


function changeColor(event) {

  const square = event.target;

  if (typeOfButton === "Color") { 
    square.style.background = "black";
  } else {
    square.style.background = "white";
  }
};



buttons.forEach((button) => {

  button.addEventListener("click", () => {
    typeOfButton = button.id;
    if (button.id === "Clear"){
      clearGrid();
    }
    });

  });





  


createGrid(); 









