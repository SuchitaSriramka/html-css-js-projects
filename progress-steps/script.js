const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActives = 1;

next.addEventListener("click", () => {
    console.log("inside next event listener")
    currentActives++;

    if(currentActives === circles.length){
        currentActives = circles.length;
    }

    update();
})

prev.addEventListener("click", () => {
    currentActives--;

    if(currentActives === 1){
        currentActives = 1;
    }

    update();
})

function update(){
    console.log("inside update()");

    circles.forEach((circle, index) => {
        if(index < currentActives){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    });

    let activeCircles = document.querySelectorAll(".active");

    progress.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

    console.log(activeCircles , ((activeCircles.length - 1) / (circles.length - 1)) * 100);
    if(currentActives === 1){
        prev.disabled = true;
    }
    else if(currentActives === circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}