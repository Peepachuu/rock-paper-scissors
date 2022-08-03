const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    const result = checkResult(playerSelection, computerSelection);
    switch (result) {
        case 0:
            return `You tied! ${playerSelection} ties with ${computerSelection}!`;
        case 1:
            ++playerScore
            return `You won! ${playerSelection} beats ${computerSelection}!`;
        case -1:
            ++computerScore
            return `You lost! ${playerSelection} loses against ${computerSelection}!`; 
    }
}

function checkResult(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        return 0;
    
    if (playerSelection == "rock")
        return (computerSelection == "paper" ? -1 : 1);
    
    if (playerSelection == "paper")
        return (computerSelection == "scissors" ? -1 : 1);
    
    if (playerSelection == "scissors")
        return (computerSelection == "rock" ? -1 : 1);
}

function game() {
    for (let i = 0; i < 5; ++i) {
        const pSelection = prompt("What's your move?").toLowerCase();
        const message = playRound(pSelection, getComputerChoice())
        alert(message);
    }
    if (playerScore < computerScore) {
        return `You lost! The computer beat you ${computerScore} - ${playerScore}`;
    } else if (playerScore == computerScore) {
        return "Wow you tied!";
    } 
    return `You won! You beat the computer ${playerScore} - ${computerScore}`;
}


alert(game());