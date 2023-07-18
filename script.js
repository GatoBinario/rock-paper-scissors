

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

for (let i = 0; i < 0; i++) {
    console.log(Math.round(Math.random()*3))
    console.log(getComputerSelection());
}