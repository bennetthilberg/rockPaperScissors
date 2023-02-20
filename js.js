

function playRound(playerSelection, computerSelection) {
  playerSelection = (prompt("Rock, paper, or scissors?", "")).toLowerCase();
  computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
    return "Tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    cpuScore++;
    return "You Lose! Rock beats Scissors!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    cpuScore++;
    return "You Lose! Paper beats Rock!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You Win! Paper beats Rock!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    cpuScore++;
    return "You Lose! Scissors beats Paper!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper!";
  }
  else{
    return "Try again!";
  }
}

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice == 0) {
    return "rock";
  } else if (compChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


function game(){
  console.log(playRound());
  console.log("Your score: ", playerScore, "   CPU Score: ", cpuScore);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let playerScore = 0;
let cpuScore = 0;
// make a bunch of lines in console so you can see score while playing
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");

let gameOver = false;
while(gameOver == false){
  game();
  if(playerScore == 5){
    console.log("You win!")
    gameOver = true;
  }
  if(cpuScore == 5){
    console.log("You lose!");
    gameOver = true;
  }
}