function refreshWeather(response){
    let displayedTemp = document.querySelector("#current-temp");
    temperature = response.data.temperature.current;

    let cityElement = document.querySelector("#displayedcity");
    cityElement.innerHTML = response.data.city;

    let iconElement = document.querySelector("#icon");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;

    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;

    let windElement = document.querySelector("#wind-speed");
    windElement.innerHTML = response.data.wind.speed;

    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    timeElement.innerHTML = formatDate(date);

    displayedTemp.innerHTML = Math.round(temperature);
}

function formatDate(date){
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  if (hours < 10) {
      hours = `0${hours}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

function searchCity(city){
    let apiKey = "4454f13co397b7eaaf38b607eb9367t6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#typed-city");
    searchCity(searchInput.value);
  }

  function displayForecast() {
    let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastHtml = "";
  
    days.forEach(function (day) {
      forecastHtml =
        forecastHtml +
        `
        <div class="weather-forecast-day">
          <div class="weather-forecast-date">${day}</div>
          <div class="weather-forecast-icon">🌤️</div>
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>15º</strong>
            </div>
            <div class="weather-forecast-temperature">9º</div>
          </div>
        </div>
      `;
    });
  
    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML = forecastHtml;
  } 
  
  let searchForm = document.querySelector("#city-form");
  searchForm.addEventListener("submit", handleSearch);

  searchCity("Sunnyvale")
  displayForecast();








