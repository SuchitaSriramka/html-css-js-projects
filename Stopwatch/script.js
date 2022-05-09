const stopwatch = document.getElementById("display");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

playButton.addEventListener("click",startStopwatch);
pauseButton.addEventListener("click",stopStopwatch);
resetButton.addEventListener("click",resetStopwatch);

let startTime;
let elapsedTime = 0;
let stopwatchInterval;

function timeToString(time){
    let diffInHrs = time/3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMins = (diffInHrs - hh) * 60;
    let mm= Math.floor(diffInMins);

    let diffInSec = (diffInMins - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2,"0");
    let formattedMM = mm.toString().padStart(2,"0");
    let formattedSS = ss.toString().padStart(2,"0");
    let formattedMS = ms.toString().padStart(3,"0");

    stopwatch.innerHTML = `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}
function startStopwatch(){
    startTime = Date.now() - elapsedTime;
    console.log(startTime)

    stopwatchInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        console.log(elapsedTime);
        timeToString(elapsedTime);
    },1);
    showButton("PAUSE");
}

function stopStopwatch(){
    clearInterval(stopwatchInterval);
    showButton("PLAY");
}

function resetStopwatch(){
    clearInterval(stopwatchInterval);
    stopwatch.innerHTML = `00:00:00:000`;
    elapsedTime = 0;
    showButton("PLAY");
}

function showButton(buttonKey){
    if(buttonKey == "PLAY"){
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    }
    else{
        playButton.style.display = "none";
        pauseButton.style.display = "block";
    }
}

