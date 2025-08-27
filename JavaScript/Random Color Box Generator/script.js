let boxes = document.querySelector(".container").children;
let btn = document.getElementById("colorBtn");

function getrandomcolor(){
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`;
}

// function to apply random colors
function applyColors() {
    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = getrandomcolor();
        e.style.color = getrandomcolor();
    });
}

// set initial colors when page loads
applyColors();

// change colors on button click
btn.addEventListener("click", applyColors);
