let gridSize = 16
let gridTotal = gridSize ** 2;
const container = document.querySelector(".grid-container");

//create grid w/ divs
function createDivs() {
  let gridTotal = gridSize ** 2;
  for (let i = 0; i < gridTotal; i++){
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    container.appendChild(newDiv);
    container.style.setProperty('grid-template-columns', 'repeat(' + gridSize + ', 1fr)');
  }
}
createDivs();

// //draw: add event listener: change BG:
let userInteract = document.querySelector("#gridBody");
userInteract.addEventListener("mouseover", draw);
//
function draw(e) {
 /* e stores the element that eventListener triggers (ie.div.grid-item is target)
 so we can check target is not parent element we assigned (ie.div #gridBody) */
   if (e.target != e.currentTarget) {
     e.target.style.background = '#9932CC'
   }
 }

let button = document.querySelector(".button");
button.addEventListener("click", resetGrid);

function resetGrid() {
  let userChoice = prompt("Enter grid size:");
  let newSize = parseInt(userChoice);
  console.log(newSize)
  if (newSize != null) {
    let gridAll = document.querySelectorAll("div.grid-item");
    console.log(gridAll)
    gridAll.forEach(function (cell) {
        cell.remove();
    });
    gridSize = newSize
    gridTotal = gridSize ** 2;
    createDivs()
  }
}
