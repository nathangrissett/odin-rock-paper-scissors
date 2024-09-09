let computerChoice;
let humanChoice;
let randomNumber;

const currentScore = document.querySelector("#currentScore");

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        console.log("CPU: rock");
        computerChoice = "rock";
    } else if (randomNumber == 1) {
        console.log("CPU: paper")
        computerChoice = "paper";
    } else {
        console.log("CPU: scissors");
        computerChoice = "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound() {
    if (((humanChoice == "rock") && (randomNumber == 0))
        || ((humanChoice == "paper") && (randomNumber == 1))
        || ((humanChoice == "scissors") && (randomNumber > 1))) {
            currentScore.textContent = " Draw!";
    } else if (((humanChoice == "rock") && (randomNumber > 1))
        || ((humanChoice == "paper") && (randomNumber == 0))
        || ((humanChoice == "scissors") && (randomNumber == 1))) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
            humanScore++;
            currentScore.textContent = `You: ${humanScore}, CPU: ${computerScore}`;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        computerScore++;
        currentScore.textContent = `You: ${humanScore}, CPU: ${computerScore}`;
    }
    roundCount++;
    finalResult();
}

function playGame() {
    getComputerChoice();
    playRound();
}

function finalResult() {
    if (humanScore === 5) {
        currentScore.textContent += " You win!"
    }
    if (computerScore === 5) {
        currentScore.textContent += " You lose!"
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rps.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
        case 'rock':
            if ((humanScore < 5) && (computerScore < 5)) {
                humanChoice = "rock";
                playGame();
                }
            break;
        case 'paper':
            if ((humanScore < 5) && (computerScore < 5)) {
                humanChoice="paper";
                playGame();
                }
            break;
        case 'scissors':
            if ((humanScore < 5) && (computerScore < 5)) {
                humanChoice="scissors";
                playGame();
                }
            break;
    }
});