let UserScore = 0;
let OpponentScore = 0;
let Round = 1;
const beats = {"P" : "R", "R": "S", "S": "P"}
const choices = ["P", "R", "S"]
const btns = document.querySelector(".buttons");
const result = document.querySelector(".result");
const humanScore = document.querySelector(".hscore");
const computerScore = document.querySelector(".cscore");
let gameStarted = false

function generateHumanChoice(btn){
    if (choices.includes(btn.dataset.choice)){
        return btn.dataset.choice;
    }
}

function generateComputerChoice(){
    return choices.at(Math.floor(Math.random() * 3));
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return 0 // Tie
    } else if (beats[humanChoice] == computerChoice) {
        return 1 // Human Won
    } else {
        return 2 // Computer Won
    }
}

function determineWinner(play){
    if (play == 1) {
        humanScore.textContent = `${++UserScore}`;
        result.textContent = `Human won | Round: ${Round}`;
    } else if (play == 2) {
        computerScore.textContent = `${++OpponentScore}`;
        result.textContent = `Computer won | Round: ${Round}`;
    } else {
        result.textContent = `It was a draw | Round: ${Round}`;
    }
}

function resetGame(){
    UserScore = 0;
    OpponentScore = 0;
    Round = 1;
    gameStarted = false;
    humanScore.textContent = "0";
    computerScore.textContent = "0";
}

function playGame(btn){
    if (!gameStarted) {
        resetGame();
        gameStarted = true;
    }
    console.log(Round);
    const humanSelection = generateHumanChoice(btn);
    const computerSelection = generateComputerChoice();
    const play = playRound(humanSelection, computerSelection);
    determineWinner(play);
    setTimeout(3000)
    if (Round == 5) {
        if (UserScore == OpponentScore){
            result.textContent = "THE GAME IS TIED. NO ONE WON!!";
        } else if (UserScore > OpponentScore) {
            result.textContent = "THE GAME IS OVER. HUMAN WON!!!";
        } else {
            result.textContent = "THE GAME IS OVER. COMPUTER WON!!!";
        }
        gameStarted = false;
    }
    Round++

}
for (const child of btns.children) {
    child.addEventListener("click", () => {
        playGame(child)
    })
  }


