const playButtons = Array.from(document.getElementsByClassName("play-button"));
const stopButton = document.querySelector(".stop");

for(let i = 0;i < playButtons.length;i++){
    let button = playButtons[i];
    console.log(button);
    playAudio(button);
}

function playAudio(button){
    button.addEventListener("click",()=>{
        stopAudio();
        document.getElementById(button.innerText).play();
    })
}

function stopAudio(){
    for(let i = 0;i < playButtons.length;i++){
        let sound = document.getElementById(playButtons[i].innerText);
        sound.pause();
        sound.currentTime = 0;
    }
}

stopButton.addEventListener("click",stopAudio);



