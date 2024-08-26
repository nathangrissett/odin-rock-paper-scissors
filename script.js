let computerChoice;
let humanChoice;
let randomNumber;

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

function getHumanChoice() {
    humanChoice = prompt("rock, paper, or scissors?", "").toLowerCase();
        if (humanChoice == "rock") {
            console.log("You: rock");
        } else if (humanChoice == "paper") {
            console.log("You: paper");
        } else if (humanChoice == "scissors") {
            console.log("You: scissors");
        } else {
            console.log("You: invalid response");
        }
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function playRound() {
    if (((humanChoice == "rock") && (randomNumber == 0))
        || ((humanChoice == "paper") && (randomNumber == 1))
        || ((humanChoice == "scissors") && (randomNumber > 1))) {
            console.log("Draw!");
    } else if (((humanChoice == "rock") && (randomNumber > 1))
        || ((humanChoice == "paper") && (randomNumber == 0))
        || ((humanChoice == "scissors") && (randomNumber == 1))) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
            humanScore++;
            console.log(`You: ${humanScore}, CPU: ${computerScore}`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        computerScore++;
        console.log(`You: ${humanScore}, CPU: ${computerScore}`)
    }
    roundCount++;
}

function playGame() {
    if (roundCount < 5) {
        getHumanChoice();
        getComputerChoice();
        playRound();
    } else {
        console.log("Game Over.");
        if (humanScore > computerScore) {
            console.log("End result: You win!");
        } else if (computerScore > humanScore) {
            console.log("End result: You lose!");
        } else {
            console.log("End result: Draw");
        }
    }
}

playGame();
playGame();
playGame();
playGame();
playGame();
playGame();
