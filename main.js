let UserScore = 0;
let OpponentScore = 0;
const beats = {"P" : "R", "R": "S", "S": "P"}
const choices = ["P", "R", "S"]

function generateHumanChoice(){
    let choice = prompt("Write R(Rock), P(Paper), or S(Scissors)");
    if (choices.includes(choice)){
        return choice;
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


function playGame(){
    UserScore = 0;
    OpponentScore = 0;
    for (let i = 1; i <= 5; i++) {
        const humanSelection = generateHumanChoice();
        const computerSelection = generateComputerChoice();
        const play = playRound(humanSelection, computerSelection);
        if (play == 1) {
            UserScore++;
            alert(`HUMAN WON ROUND: ${i}, SCORE[H:${UserScore}, C: ${OpponentScore}]`)
        } else if (play == 2) {
            OpponentScore++;
            alert(`COMPUTER WON ROUND: ${i}, SCORE[H:${OpponentScore}, C: ${UserScore}]`)
        } else {
            alert(`IT'S A TIE ROUND: ${i}, SCORE[H:${UserScore}, C: ${OpponentScore}]`)
        }
    }
    if (UserScore == OpponentScore){
        alert("THE GAME IS TIED. NO ONE WON!!");
    } else if (UserScore > OpponentScore) {
        alert("THE GAME IS OVER. HUMAN WON!!!");
    } else {
        alert("THE GAME IS OVER. COMPUTER WON!!!");
    }
}

playGame();