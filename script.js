//Secondary functions
function getComputerSelection() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return;
    }
}

function getPlayerSelection() {
    let option;
    let continueLoop = true;

    while(continueLoop) {
        option = prompt("Choose your option", "rock").toLowerCase(); 
        switch (option) {
            case "rock":
                continueLoop = false;
                break;
            case "paper":
                continueLoop = false;
                break;
            case "scissors":
                continueLoop = false;
                break;
            default:
                return;
        }
    }
    return option; 
}

function declareWinner(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "Tie, rock vs rock"
                case "paper":
                    return "You lose, rock gets wraped by paper";
                case "scissors":
                    return "You win, rock beats scissors"
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You lose, rocks gets beaten by paper"
                case "paper":
                    return "Tie, paper vs paper";
                case "scissors":
                    return "You win, paper wraps rock"
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You lose, scissors get beaten by rock"
                case "paper":
                    return "You win, scissors cut paper";
                case "scissors":
                    return "Tie, scissors vs scissors"
            }
            break;
    }   
}

//Main
