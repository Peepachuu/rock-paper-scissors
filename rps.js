const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(e) {
    if (gameOver)
        return;
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.className;
    const result = checkResult(playerSelection, computerSelection);

    const gameResult = document.querySelector(".result-text");
    const gamesScore = document.querySelector(".game-score");
    if (result == 0) {
            gameResult.textContent = `You tied! ${playerSelection} ties with ${computerSelection}!`; 
    }
    else if (result == 1) {
            ++playerScore 
            gameResult.textContent = `You won! ${playerSelection} beats ${computerSelection}!`;
    }
    else if (result == -1) {
            ++computerScore
            gameResult.textContent = `You lost! ${playerSelection} loses against ${computerSelection}!`;
    }
    gamesScore.textContent = `score: ${playerScore} - ${computerScore}`
    if (playerScore == 5) {
        gameResult.textContent = `Game over! You win!`
        gameOver = true;
    } else if (computerScore == 5) {
        gameResult.textContent = 'Game over! You lose!'
        gameOver = true;
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



let btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener('click', playRound)
});