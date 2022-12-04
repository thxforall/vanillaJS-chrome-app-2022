const API_KEY = "2547177bef58bd74709da57c9f14fa33";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector(".weather-box h1:first-child");
      weather.innerText = `${data.main.temp}˚C `;
      const city = document.querySelector(".weather-box h1:last-child");
      city.innerText = `${data.name}`;
    })
  );
}
function onGeoErr() {
  alert("No Position... Wahtever... May Waether");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
