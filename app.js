// Cache DOM elements
const buttons = document.querySelectorAll(".move-btn");
const resultDisplay = document.querySelector("#game-result");
const gameHistory = document.querySelector("#game-history");
const form = document.querySelector("#feedback-form");
const formMessage = document.querySelector("#form-message");
const moves = ["rock", "paper", "scissors"];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const userChoice = e.target.textContent;
    console.log(userChoice);
    console.log(getComputerChoice());
  });
});
const getComputerChoice = () => {
  return moves[Math.floor(Math.random() * moves.length)];
};

// console.log(getComputerChoice());
