// Cache DOM elements
const buttons = document.querySelectorAll(".move-btn");
const resultDisplay = document.querySelector("#game-result");
const gameHistory = document.querySelector("#game-history");
const form = document.querySelector("#feedback-form");
const formMessage = document.querySelector("#form-message");
const moves = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const userChoice = e.target.textContent;
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    const comparisonChoice = determineWinner(userChoice, computerChoice);
    messageReturned(comparisonChoice);
    console.log("hahahahahhahahahahah", userScore);
    console.log("hihihihihihihihihihi", computerScore);
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
// console.log(getComputerChoice());
console.log(userScore);
console.log(computerScore);

function messageReturned(comparisonChoice) {
  if (comparisonChoice == "It's a tie!") {
    console.log("tie");
  } else if (comparisonChoice == "You win!") {
    console.log("you win");
    return (userScore += 1);
  } else {
    console.log("computer win");
    computerScore += 1;
    return computerScore;
  }
}
