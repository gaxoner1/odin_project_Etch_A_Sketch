let gridSize = 16;
let gridTotal = gridSize ** 2;


//create grid w/ divs
function createDivs() {
  for (i = 0; i < gridTotal; i++){
    let newDiv = document.createElement("div");
    const container = document.getElementsByClassName("grid-container");
    newDiv.className = "grid-item";
    container[0].appendChild(newDiv);
  }
}
createDivs();


//draw: add event listener: change BG:
let userInteract = document.querySelector("#gridBody");
userInteract.addEventListener("mouseover", draw);

function draw(e) {
//e stores the element that eventListener triggers (ie.div.grid-item is target)
//so we can check target is not parent element we assigned (ie.div #gridBody)
  if (e.target != e.currentTarget) {
    // console.log(e.currentTarget) <--checks for reference
    // console.log(e.target); <-- checks for reference
    e.target.style.background = 'blue'
  }
}
