let choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    let result = checkResult(playerSelection, computerSelection);
    switch (result) {
        case 0:
            console.log(`You tied! ${playerSelection} ties with ${computerSelection}!`);
            return [0, 0];
        case 1:
            console.log(`You won! ${playerSelection} beats ${computerSelection}!`);
            return [1, 0];
        case -1:
            console.log(`You lost! ${playerSelection} loses against ${computerSelection}!`); 
            return [0, 1];   
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
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; ++i) {
        let pSelection = prompt("What's your move?").toLowerCase();
        scoresThisRound = playRound(pSelection, getComputerChoice());
        playerScore += scoresThisRound[0];
        computerScore += scoresThisRound[1];
    }
    if (playerScore < computerScore) {
        console.log(`You lost! The computer beat you ${computerScore} - ${playerScore}`)
    } else if (playerScore == computerScore) {
        console.log(`Wow you tied!`)
    } else {
        console.log(`You won! You beat the computer ${playerScore} - ${computerScore}`)
    }
}

game();