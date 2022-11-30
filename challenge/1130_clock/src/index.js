const clockTitle = document.querySelector(".js-clock");

function happyChristmas() {
  const christmas = new Date("2022-12-25");
  let today = new Date();
  let untilChristmas = christmas - today;

  let untilChristmasDay = Math.floor(untilChristmas / (1000 * 60 * 60 * 24));
  let untilChristmasHours = String(
    Math.floor((untilChristmas / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  let untilChristmasMinutes = String(
    Math.floor((untilChristmas / (1000 * 60)) % 60)
  ).padStart(2, "0");
  let untilChristmasSeconds = String(
    Math.floor((untilChristmas / 1000) % 60)
  ).padStart(2, "0");

  if (untilChristmas === 0) {
    clockTitle.innerText = "HAPPY CHRISTMAS!! Nico 쌤!";
  } else {
    clockTitle.innerText = `${untilChristmasDay}d ${untilChristmasHours}h ${untilChristmasMinutes}m ${untilChristmasSeconds}s`;
  }
}

happyChristmas();
setInterval(happyChristmas, 1000);
