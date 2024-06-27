let humanScore = 0;
let machineScore = 0;
function getComputerChoice() {
    let number = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(number);
}

function getHumanChoice() {
    let userValue = String(
        window.prompt("Choose between Rock, Paper, Scissors ", "")
    );
}
getComputerChoice();

function playRound(humanChoice, computerChoice) {
    // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
