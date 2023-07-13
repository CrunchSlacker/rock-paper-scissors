

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
    if (playerSelection == computerSelection) {
        console.log("Tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win!");
        return 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win!");
        return 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win!")
        return 1;
    } else {
        console.log("Computer Wins!");
        return 2;
    }
}

function game() {
    let playerScore = 0, computerScore = 0, playerSelection, computerSelection;
    
    for (let rounds = 0; rounds < 5; rounds++ ){
        if (playerScore == 3) {
            console.log("Player Wins");
            break;
        } else if (computerScore == 3) {
            console.log("Computer Wins");
            break;
        }

        computerSelection = getComputerChoice();
        playerSelection = getPlayerSelection();

        const roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == 1) {
            playerScore ++;
        } else if (roundResult == 2) {
            computerScore ++;
        }
        console.log("Player Choice: " + playerSelection + "\nComputer Choice: " + computerSelection);
        console.log("Player Score: " + playerScore + "\nComputer Score: " + computerScore);
    }
}

game();

