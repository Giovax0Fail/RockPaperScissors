let humanScore = 0;
let machineScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    return NumberToString(number);
}

function NumberToString(number) {
    let ComChoice = "";
    switch (number) {
        case 1:
            ComChoice = "rock";
            break;
        case 2:
            ComChoice = "paper";
            break;
        case 3:
            ComChoice = "scissors";
            break;
    }
    return ComChoice;
}

function getHumanChoice() {
    let userValue = String(
        window.prompt("Choose between 'Rock', 'Paper', 'Scissors' ", "")
    ).toLowerCase();
    return userValue;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) 
        window.alert("Draw!");
    } 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
