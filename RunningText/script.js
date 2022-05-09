const text = document.getElementById("text");
const speed = document.getElementById("speed");

const TEXT = "We Love Programming!";
const NUM = 500;

let time = NUM/speed.value;
let index = 1;

writeText();

function writeText(){
    text.innerHTML = TEXT.slice(0,index);

    index++;

    if(index>TEXT.length){
        index = 1;
    }

    setTimeout(writeText,time);
}

speed.addEventListener("input",(e) => {
    time = NUM/e.target.value;
})
