console.log("Lets play Rock, Paper and Scissors")

// ComputeChoiceCode
function getComputerChoice(){
    Math.floor(Math.random() * 3);
}

// UserChoiceCode
function getHumanChoice(){
    choice = prompt("Enter your choice");
    return choice;
}

// Scores

let humanScore = 0;
let computerScore = 0;

// The actual game

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();

    // computerChoice conditional block
    let computerMove = "";
    if (computerChoice === 0) {
        computerMove = "rock";
    } else if (computerChoice === 1) {
        computerMove = "paper";
    } else {
        computerMove = "scissors";
    }
    console.log(`===============================================`)
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerMove}`);

    // humanChoice conditional block
    if (humanChoice === computerMove) {
        console.log("tie");
    } else if (
        (humanChoice === "rock" && computerMove === "scissors") ||
        (humanChoice === "paper" && computerMove === "rock") ||
        (humanChoice === "scissors" && computerMove === "paper")
    ) {
        console.log("You win this round");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }
    console.log(`===============================================`)
    console.log(`Scores -> You: ${humanScore}, Computer: ${computerScore}`);
}

// Play Games 5 Times

function playGame() {
    let n = 5;
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore < computerScore) {
        console.log("Computer Won");
    }

    else if (humanScore > computerScore) {
        console.log("Human Won");
    }
    else {
        console.log("Its a Draw")
    }
}

playGame();