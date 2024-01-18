function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#typed-city");
    let cityElement = document.querySelector("#displayedcity");
    cityElement.innerHTML = searchInput.value;
  }
  
  let searchForm = document.querySelector("#city-form");
  searchForm.addEventListener("submit", handleSearch);