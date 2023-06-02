const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById ('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city){
  const api_key= "74fad29d5f3123c610c02c6f9144e156" ;
  const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
 
  const weather_data= await fetch(`${url}`).then(response => response.json());
 
 console.log(weather_data);
 console.log(weather_data.wind.speed)

  temperature.innerHTML= `${Math.round (weather_data.main.temp-273.15)}°c`;

  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%` ;

  wind_speed.innerHTML = `${weather_data.wind.speed}km/h`;

  console.log(weather_img);
console.log(weather_data.weather[0].main);
 
switch(weather_data.weather[0].main){
  
  case 'clouds':
    weather_img.src= "./images/cloud.jpg"; 
    break;
  case 'Haze':
    weather_img.src= "./images/haze.jpg"; 
    break;
  case 'rain':
    weather_img.src= "./images/rain.jpg"; 
    break;
  case 'smoke':
    weather_img.src= "./images/mist.jpg"; 
    break;
  case 'snow':
    weather_img.src= "./images/snow.jpg"; 
    break;
}
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);

});