function refreshWeather(response){
    let displayedTemp = document.querySelector("#current-temp");
    temperature = response.data.temperature.current;

    let cityElement = document.querySelector("#displayedcity");
    cityElement.innerHTML = response.data.city;

    let windElement = document.querySelector("#wind-speed");
    windElement.innerHTML = response.data.wind.speed;

    console.log(response.data);

    displayedTemp.innerHTML = Math.round(temperature);
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
  
  let searchForm = document.querySelector("#city-form");
  searchForm.addEventListener("submit", handleSearch);

  searchCity("Sunnyvale")