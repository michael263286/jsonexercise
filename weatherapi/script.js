const searchLat = document.querySelector("#lat");
const searchLon = document.querySelector("#lon");
const searchButton = document.querySelector("#searchbutton");
const weatherForm = document.querySelector("#weather-form");

const cityName = document.querySelector("#name");
const stateCode = document.querySelector("#state");
const countryCode = document.querySelector("#country");
const cloudsDisplay =document.querySelector('.clouds')
const tempDisplay =document.querySelector('.temp')
const cityDisplay = document.querySelector('.city-name')
weatherForm.addEventListener("submit", function (e) {
  e.preventDefault();
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value},${stateCode.value},${countryCode.Value}&limit=5&appid=1948bee6e19039b7778b5cbd720d8e5a`
  )
    .then((res) => res.json())
    .then(function (data) {
      console.log(data);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=1948bee6e19039b7778b5cbd720d8e5a`
      )
        .then((res) => res.json())
        .then(function (data) {
          const temperatureKel = data.main.temp 
          const fahrenheit = Math.round((temperatureKel - 273.15) * (9/5) + 32)
          const description = data.weather[0].description
          const nameCity = data.name
          cityDisplay.innerHTML = nameCity
          tempDisplay.innerHTML = fahrenheit + '&#xb0;'
          cloudsDisplay.innerHTML = description
          console.log(fahrenheit)
          console.log(description)
        });
    });
});
