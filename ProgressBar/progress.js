const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById("progress");

let currentLevel = 1;
let numOfLevels = circles.length;

prev.addEventListener("click",()=>{
    currentLevel--;
    updateCSS();
})

next.addEventListener("click",()=>{
    currentLevel++;
    updateCSS();
})

function enableDisable(){
    if(currentLevel <= 1){
        prev.disabled = true;

    }
    else if(currentLevel >= numOfLevels){
        next.disabled = true;

    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}

function updateCSS(){
    for(let i = 0;i < numOfLevels;i++){
        const circle = circles[i];
        if(i < currentLevel){
            circle.classList.add("active");
        }
        else{
            circle.classList.remove("active");
        }
    }

    const actives = document.querySelectorAll(".active");

    //calc and set width of progress bar
    const width = ((actives.length-1) / (circles.length-1)) * 100;
    progress.style.width = width+"%";

    enableDisable();
}
