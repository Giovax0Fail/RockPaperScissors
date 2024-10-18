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
    if (humanChoice === computerChoice) {
        window.alert("Draw!");
        window.alert(`Computer Choice: ${computerChoice}`);
        window.alert(`Human Choice: ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        window.alert("You win!");
        humanScore++;
        window.alert(`Computer Choice: ${computerChoice}`);
        window.alert(`Computer Score: ${machineScore}`);
        window.alert(`Human Score: ${humanScore}`);
        window.alert(`Human Choice: ${humanChoice}`);
    } else {
        window.alert("You lose!");
        machineScore++;
        window.alert(`Computer Choice: ${computerChoice}`);
        window.alert(`Computer Score: ${machineScore}`);
        window.alert(`Human Score: ${humanScore}`);
        window.alert(`Human Choice: ${humanChoice}`);
    }
}

function howManyRounds() {
    var round_string = prompt("How many rounds you wanna play?", "");
    const round_num = parseInt(round_string);
    return round_num;
}

function callFunctionXTimes(playRound, x) {
    for (let i = 0; i < x; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

const round_num = howManyRounds();
callFunctionXTimes(playRound, round_num);

