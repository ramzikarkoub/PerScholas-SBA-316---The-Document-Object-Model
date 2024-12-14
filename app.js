// Cache DOM elements
const buttons = document.querySelectorAll(".move-btn");
const resultDisplay = document.querySelector("#game-result");
const gameHistory = document.querySelector("#game-history");
const form = document.querySelector("#feedback-form");
const formMessage = document.querySelector("#form-message");
const youResult = document.querySelector(".you-result");
const copmuterResult = document.querySelector(".computer-result");
const moves = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
console.log(copmuterResult.textContent);
console.log(youResult.textContent);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const userChoice = e.target.textContent;
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    const comparisonChoice = determineWinner(userChoice, computerChoice);
    incrementScore(comparisonChoice);
    updateUIScore(userScore, computerScore);
    alertWinner(userScore, computerScore);

    const historyItem = document.createElement("li");
    historyItem.textContent = `You: ${userChoice}, Computer: ${computerChoice}, Result: ${comparisonChoice}`;
    gameHistory.appendChild(historyItem);
  });
});
const getComputerChoice = () => {
  return moves[Math.floor(Math.random() * moves.length)];
};

function determineWinner(player, computer) {
  if (player === computer) {
    console.log("tie");
    return "It's a tie!";
  }
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    console.log("you win");
    return "You win!";
  }
  console.log("you lose");
  return "You lose!";
}

function incrementScore(comparisonChoice) {
  if (comparisonChoice == "It's a tie!") {
    console.log("tie");
  } else if (comparisonChoice == "You win!") {
    console.log("you win");
    userScore += 1;
    computerScore;
    return userScore;
  } else {
    console.log("you loose");
    computerScore += 1;
    return computerScore;
  }
}
const updateUIScore = (userScore, computerScore) => {
  console.log((copmuterResult.textContent = computerScore));
  console.log((youResult.textContent = userScore));
};

const alertWinner = (userScore, computerScore) => {
  if (userScore == 10) {
    alert("you win!!!!");
  } else if (computerScore == 10) {
    alert("computer wins");
  }
};
