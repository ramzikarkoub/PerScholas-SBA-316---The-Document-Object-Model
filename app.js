// Cache DOM elements
const buttons = document.querySelectorAll(".move-btn");
const resultDisplay = document.querySelector("#game-result");
const gameHistory = document.querySelector("#game-history");
const form = document.querySelector("#feedback-form");
const formMessage = document.querySelector("#form-message");
const youResult = document.querySelector(".you-result");
const computerResult = document.querySelector(".computer-result");

// Initialize  variables
const moves = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;

// Initialize scores in UI
computerResult.textContent = 0;
youResult.textContent = 0;

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const userChoice = e.target.textContent;
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateScores(result);
    updateUIScores();
    addHistory(userChoice, computerChoice, result);
    checkWinner();
  });
});

// Generate computer's move
const getComputerChoice = () => {
  return moves[Math.floor(Math.random() * moves.length)];
};

// Determine the winner
const determineWinner = (player, computer) => {
  if (player === computer) return "It's a tie!";
  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    return "You win!";
  }
  return "You lose!";
};
// Reset the game state
const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  updateUIScores();
  clearHistory();
};
// Update scores based on the result
const updateScores = (result) => {
  if (result === "You win!") userScore++;
  else if (result === "You lose!") computerScore++;
};

// Update scores in the UI
const updateUIScores = () => {
  console.log("com, you", computerResult, youResult);
  computerResult.textContent = computerScore;
  youResult.textContent = userScore;
};

// Check if someone has won the game
const checkWinner = () => {
  if (userScore === 10 || computerScore === 10) {
    const winnerMessage =
      userScore === 10 ? "You win the game!" : "Computer wins the game!";
    alert(
      `${winnerMessage} You scored: ${userScore}, Computer scored: ${computerScore}`
    );
    resetGame();
  }
};

// Add game history entry
const addHistory = (userChoice, computerChoice, result) => {
  const historyItem = document.createElement("li");
  result == "You lose!"
    ? historyItem.classList.add("red")
    : historyItem.classList.add("green");

  historyItem.textContent = `You: ${userChoice}, Computer: ${computerChoice}, Result: ${result}`;
  gameHistory.prepend(historyItem);
};

// Clear game history
const clearHistory = () => {
  gameHistory.innerHTML = "";
};

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = form.username.value;

  formMessage.textContent = `Thank you, ${username}! Your feedback has been submitted.`;
  form.reset();
});
