const loginForm = document.querySelector("form");
const loginInput = document.querySelector("form input");
const greeting = document.querySelector(".hiUser-text");
const logOut = document.querySelector(".header .header-column");

const greetingsMorning = [
  "굿모닝!",
  "오늘은 느낌이 좋은걸?",
  "아침은 드셨나요?",
  "오늘도 좋은 하루!",
];
let randomgGreetingsMorning =
  greetingsMorning[Math.floor(Math.random() * greetingsMorning.length)];
const greetingsAfternoon = [
  "점심은 드셨나요?",
  "퇴근까지... 조금만 더!",
  "괜찮아요 잘 될거에요",
  "아자아자 힘내봐요!",
];
let randomgGreetingsAfternoon =
  greetingsAfternoon[Math.floor(Math.random() * greetingsAfternoon.length)];
const greetingsNight = [
  "굿나잇!",
  "오늘 하루 고생했어요",
  "수고많았습니다",
  "무사히 감사합니다.",
];
let randomgGreetingsNight =
  greetingsNight[Math.floor(Math.random() * greetingsNight.length)];

let time = new Date();
let hours = time.getHours();

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

loginForm.addEventListener("submit", onSubmit);

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  if (hours >= 6 && hours < 12) {
    greeting.innerText = `${username}님, ${randomgGreetingsMorning}`;
  } else if (hours >= 12 && hours < 18) {
    greeting.innerText = `${username}님, ${randomgGreetingsAfternoon}`;
  } else if (hours >= 18) {
    greeting.innerText = `${username}님, ${randomgGreetingsNight}`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logOut.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
} else {
  paintGreetings();
}

function onClickLogOut() {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmit);
  greeting.classList.add(HIDDEN_CLASSNAME);
  logOut.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
}

logOut.addEventListener("click", onClickLogOut);
