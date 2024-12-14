// Cache DOM elements
const buttons = document.querySelectorAll(".move-btn");
const resultDisplay = document.querySelector("#game-result");
const gameHistory = document.querySelector("#game-history");
const form = document.querySelector("#feedback-form");
const formMessage = document.querySelector("#form-message");
const moves = ["Rock", "Paper", "Scissors"];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const userChoice = e.target.textContent;
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (userChoice == "Rock" && computerChoice == "Paper") {
      console.log("you choosed rock and the computer paper");
    } else if (userChoice == "Rock" && computerChoice == "Scissors") {
      console.log("hahahah");
    } else {
      console.log("meaw");
    }
  });
});
const getComputerChoice = () => {
  return moves[Math.floor(Math.random() * moves.length)];
};

// console.log(getComputerChoice());
