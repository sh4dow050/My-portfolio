let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
getWeatherData = (city) => {
 const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
 const fullURL = `${URL}${city}&appid=${API_KEY}&units=imperial`
 let cityDetail = fetch(fullURL)
 return cityDetail.then((a) => { return a.json() })
  .catch((v) => { console.log('error occured'); })
}

searchCity = () => {
 const city = document.getElementById('city-input').value;
 getWeatherData(city).then((response) => {
  showWeatherData(response);
 });
}

showWeatherData = (response) => {
 console.log(response);
 const city = response.name
 const currentTemp = response.main.temp;
 const currentMinTemp = response.main.temp_min;
 const currentMaxTemp = response.main.temp_max;
 const condition = response.weather[0].main;

 document.getElementById('city-name').textContent = `${city}`
 document.getElementById('weather-type').textContent = `${condition}`
 document.getElementById('temp').textContent = `${currentTemp}`
 document.getElementById('max-temp').textContent = `${currentMaxTemp}`
 document.getElementById('min-temp').textContent = `${currentMinTemp}`
}

