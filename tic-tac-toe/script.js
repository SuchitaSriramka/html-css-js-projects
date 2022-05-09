const submit = document.getElementById("submit");
const details = document.querySelector(".details");
const game = document.querySelector(".game");
const message = document.querySelector(".message");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2")

const winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


let activePlayer = 0;
let gameTied = false;
let playGame = true;

submit.addEventListener("click", initializeGame);

function initializeGame() {
    let name1 = player1.value;
    let name2 = player2.value;

    activePlayer = 0;

    details.style.display = "none";
    game.style.display = "flex";

    showMessage(`${activePlayer === 0 ? name1 : name2}'s chance`);

    for (let i = 0; i <= 8; i++) {
        let gridEl = document.createElement("div");
        gridEl.id = i;
        gridEl.classList.add("game-slot");

        gridEl.addEventListener("click", () => {

            //players cannot undo their choice
            if (!gridEl.innerText && playGame) {

                gridEl.innerText = activePlayer === 0 ? "x" : "o";
                const winner = checkWinner()
                const gameTied = isGameTied()
                console.log(gameTied);
                if (!winner && gameTied) {
                    showMessage("Game tied!")
                    setTimeout(() => restartGame(), 2000);
                }
                else if (!winner) {
                    updateActivePlayer();
                    showMessage(`${activePlayer === 0 ? name1 : name2}, you're up`)
                }
                else {
                    showMessage(`${activePlayer === 0 ? name1 : name2}, congratulations you won!`)
                    setTimeout(() => restartGame(), 2000);
                }
            }
        });

        game.appendChild(gridEl);

    }

}

function restartGame() {
    details.style.display = "block";
    message.innerHTML = "";
    game.style.display = "none";
    let gameChildren = Array.from(document.querySelectorAll(".game-slot"))
    gameChildren.forEach((gameChild) => {
        game.removeChild(gameChild)
    })
    player1.value = "";
    player2.value = "";
    playGame = true
}

function showMessage(msg) {
    message.innerHTML = `<h3>${msg}</h3>`;
}

function updateActivePlayer() {
    if (activePlayer === 1)
        activePlayer = 0;
    else
        activePlayer = 1;
}

function checkWinner() {
    let winnerBool = false

    for (let i = 0; i < winningSequences.length; i++) {
        const winningCombo = winningSequences[i];

        const cell1 = document.getElementById(winningCombo[0])
        const cell2 = document.getElementById(winningCombo[1])
        const cell3 = document.getElementById(winningCombo[2])

        const val1 = cell1.innerText
        const val2 = cell2.innerText
        const val3 = cell3.innerText

        if (val1 === val2 && val2 === val3 && val1 != '') {
            winnerBool = true
            playGame = false
            cell1.style.backgroundColor = "purple"
            cell2.style.backgroundColor = "purple"
            cell3.style.backgroundColor = "purple"
            break;
        }
    }
    return winnerBool
}

function isGameTied() {
    let flag = false
    for (let i = 0; i <= 8; i++) {
        let gridEl = document.getElementById(i)
        if (!gridEl.innerText) {
            flag = true
        }
    }
    gameTied = !flag
    return gameTied
}
