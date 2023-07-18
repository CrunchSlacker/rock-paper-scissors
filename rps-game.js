

function getComputerChoice() {
    let randInt = Math.round(Math.random() * 2)
    if (randInt == 0) {
        return "rock";
    } else if (randInt == 1) {
        return "paper";
    } else {
        return "scissors"
    }

}

const getPlayerSelection = () => {
    console.log("Rock, Paper or Scissors?");
    return prompt().toLowerCase();
}

const playRound = (playerSelection, computerSelection) => {
    const body = document.querySelector('body');
    const roundResultDiv = document.createElement('div');
    const resultText = document.createElement('h3');
    const computerResultText = document.createElement('h3');

    if (playerSelection == computerSelection) {
        resultText.textContent = "Tie!"
        computerResultText.textContent = "Computer: " + computerSelection;
        roundResultDiv.appendChild(computerResultText);
        roundResultDiv.appendChild(resultText);
        body.appendChild(roundResultDiv);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        resultText.textContent = "You Win!"
        computerResultText.textContent = "Computer: " + computerSelection;
        roundResultDiv.appendChild(computerResultText);
        roundResultDiv.appendChild(resultText);
        body.appendChild(roundResultDiv);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        resultText.textContent = "You Win!"
        computerResultText.textContent = "Computer: " + computerSelection;
        roundResultDiv.appendChild(computerResultText);
        roundResultDiv.appendChild(resultText);
        body.appendChild(roundResultDiv);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        resultText.textContent = "You Win!"
        computerResultText.textContent = "Computer: " + computerSelection;
        roundResultDiv.appendChild(computerResultText);
        roundResultDiv.appendChild(resultText);
        body.appendChild(roundResultDiv);
    } else {
        resultText.textContent = "Computer Wins!"
        computerResultText.textContent = "Computer: " + computerSelection;
        roundResultDiv.appendChild(computerResultText);
        roundResultDiv.appendChild(resultText);
        body.appendChild(roundResultDiv);
    }
}

function game() {
    const body = document.querySelector('body');
    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const scissorsButton = document.createElement('button');

    const divLog = document.createElement('div');
    divLog.setAttribute('id', 'gameLog');

    rockButton.textContent = "Rock";
    rockButton.setAttribute('id', 'rock');
    paperButton.textContent = "Paper";
    paperButton.setAttribute('id', 'paper');
    scissorsButton.textContent = "Scissors";
    scissorsButton.setAttribute('id', 'scissors');

    

    window.onload = function() {
        const rockBtn = document.querySelector('#rock');
        const paperBtn = document.querySelector('#paper');
        const scissorsBtn = document.querySelector('#scissors');
        const playerSelection = document.createElement('h3');
        const promptAnswer = document.createElement('h1');
        promptAnswer.textContent = "Rock, Paper or Scissors?";

        divLog.appendChild(promptAnswer);

        rockBtn.addEventListener('click', () => {
            playerSelection.textContent = "Player: Rock!";
            divLog.appendChild(playerSelection);
            playRound('rock', getComputerChoice());
        });
    
        paperBtn.addEventListener('click', () => {
            playerSelection.textContent = "Player: Paper!";
            divLog.appendChild(playerSelection);
            playRound('paper', getComputerChoice());
        });
    
        scissorsBtn.addEventListener('click', () => {
            playerSelection.textContent = "Player: Scissors!";
            divLog.appendChild(playerSelection);
            playRound('scissors', getComputerChoice());
        });
    }
    

    body.appendChild(rockButton);
    body.appendChild(paperButton);
    body.appendChild(scissorsButton);
    body.appendChild(divLog);



    
}

game();

