//  **********************************************************************************************

// Selection of variables

let scoreEl = document.querySelector(".score");
let btnCheckEl = document.querySelector(".check");
let highScoreEl = document.querySelector(".highscore");
let numberEl = document.querySelector(".number");
let btnAgainEl = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// Making display function
const displayMessage = function (message) {
  return (document.querySelector(".message").textContent = message);
};

const backgroundColor = function (color) {
  return (document.querySelector("body").style.backgroundColor = color);
};

// Game logic
const gameLogic = function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No number");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    numberEl.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }

    backgroundColor("Green");
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "To high" : "To low");

    if (score >= 1) {
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage("You loose");
    }
  }
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    gameLogic();
  }
});
btnCheckEl.addEventListener("click", gameLogic);

btnAgainEl.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage("Start guessing...");

  scoreEl.textContent = score;

  numberEl.textContent = "?";

  document.querySelector(".guess").value = "";

  backgroundColor("Black");
});
