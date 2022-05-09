const colors = ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed','#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0'];
const container = document.querySelector(".container");
const BOXES = 1200;

for(let i=0;i < BOXES;i++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover",()=>setColor(box));
    box.addEventListener("mouseout",()=>removecolor(box));

    container.appendChild(box);
}

function setColor(box){
    const color = randomColor();

    box.style.backgroundColor = "red";
    box.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removecolor(box){
    box.style.backgroundColor = "#1d1d1d";
    box.style.boxShadow = "0 0 2px #000";
}

function randomColor(){
    const index = Math.floor(Math.random()*colors.length);
    return colors[index];
}