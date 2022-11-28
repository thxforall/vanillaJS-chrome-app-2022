const HIDDEN_CLASSNAME = "hidden";
const min = 0;

const numGame = document.querySelector("#number-game");
const inputMaxNum = document.querySelector("#input-maxNum");
const inputGuessNum = document.querySelector("#input-guessNum");
const guessNumText = document.querySelector("p #guessNum-text");
const randomNumText = document.querySelector("p #randomNum-text");
const hiddenClasses = document.querySelectorAll(".hidden");

function startNumGame(event) {
  event.preventDefault();
  const guessNum = inputGuessNum.value;
  const maxNum = inputMaxNum.value;
  setRandomNum(min, maxNum);
  paintResult(guessNum, maxNum);
  removeHidden();
  checkNum();
}

function paintResult(guessNum, maxNum) {
  guessNumText.innerText = guessNum;
  randomNumText.innerText = setRandomNum(min, maxNum);
}

function removeHidden() {
  hiddenClasses[0].classList.remove(HIDDEN_CLASSNAME);
  hiddenClasses[1].classList.remove(HIDDEN_CLASSNAME);
}

function checkNum() {
  if (parseInt(guessNumText.innerText) === parseInt(randomNumText.innerText)) {
    youWin();
  } else {
    youLost();
  }
}

function youWin() {
  hiddenClasses[1].innerText = "You Win!";
}
function youLost() {
  if (hiddenClasses[1].innerText != "You Lost!") {
    hiddenClasses[1].innerText = "You Lost!";
  }
}

function setRandomNum(min, maxNum) {
  min = Math.ceil(min);
  max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

numGame.addEventListener("submit", startNumGame);
