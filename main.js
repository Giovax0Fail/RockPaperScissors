let humanScore = 0;
let machineScore = 0;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    return NumberToString(number);
}

function NumberToString(number) {
    switch (number) {
        case 1: return "roccia";    // Modifica da "sasso" a "roccia"
        case 2: return "carta";
        case 3: return "forbici";
    }
}

function play(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = "";

    if (humanChoice === computerChoice) {
        resultMessage = "Pareggio!";
    } else if (
        (humanChoice === "roccia" && computerChoice === "forbici") ||
        (humanChoice === "carta" && computerChoice === "roccia") ||
        (humanChoice === "forbici" && computerChoice === "carta")
    ) {
        resultMessage = "Hai vinto!";
        humanScore++;
    } else {
        resultMessage = "Hai perso!";
        machineScore++;
    }

    document.getElementById('resultMessage').innerText = `${resultMessage} Scelta Computer: ${computerChoice}, Scelta Giocatore: ${humanChoice}`;
    document.getElementById('humanScore').innerText = `Punteggio Giocatore: ${humanScore}`;
    document.getElementById('machineScore').innerText = `Punteggio Computer: ${machineScore}`;
}

// Aggiungi gli event listener ai pulsanti
document.getElementById('rockBtn').addEventListener('click', () => play('roccia'));
document.getElementById('paperBtn').addEventListener('click', () => play('carta'));
document.getElementById('scissorsBtn').addEventListener('click', () => play('forbici')); // Corretto "sasso" in "forbici"
