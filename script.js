console.log('Hello, world!')

// Variables for tracking the scores for the player/computer.
let rounds = 5;
let humanScore = 0;
let computerScore = 0;

// Randomly returns a choice between rock, paper and scissors.
function getComputerChoice() {
    let random = Math.random();

    if (random >= 0 && random < 1/3) {
        return 'rock';
    }
    else if (random >= 1/3 && random < 2/3) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

// Displays a prompt window, during which the player must input their choice between rock, paper and scissors.
// Works based on case-insensitive string input.
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: (rock / paper / scissors)");
    return humanChoice.toLowerCase();
}

// Controls the way each round is played.
function playRound(humanChoice, computerChoice) {

}

// Controls how the entire game is played.
// Hardcoded to have a player play 5 rounds against the computer.
function playGame() {
    while (rounds > 1) {


        rounds--;
    }
}

