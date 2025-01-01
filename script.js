let cityName;
let myApiKey;

const weatherCheck = async () => {
    cityName = document.getElementById('cityInput').value
    myApiKey = "5115d5bbff3776004099f5b2e90ef862"
    const myApiss = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}`
    console.log(myApiss);
    let weather = await fetch(myApiss)
    let myResponse = await weather.json()
    let realWeather = myResponse.main.temp
    let convertedWeather = Math.floor(Number(realWeather)-273)

    show.innerHTML = `<h1 style = "font-size: 100px">${convertedWeather}°C</h1>
    <img src = "https://api.openweathermap.org/img/w/${myResponse.weather[0].icon}.png" alt="Weather icon">
    <p style = "color:white; font-size:20px; font-weight:500">City: ${myResponse.name}</p>
    <p style = "color:white; font-size:20px; font-weight:500">Country: ${myResponse.sys.country}</p>
    <p style = "color:white; font-size:20px; font-weight:500">Description: ${myResponse.weather[0].description}</p>
    <p style = "color:white; font-size:20px; font-weight:500">Time: ${new Date().toLocaleTimeString()}</p>
    <p style = "color:white; font-size:20px; font-weight:500">Date: ${new Date().toLocaleDateString()}</p>
    <p style = "color:white; font-size:20px; font-weight:500">${myResponse.id}</p>
    <p style = "color:white; font-size:20px; font-weight:500">${myResponse.sys.sunrise}</p>
    `
    // console.log(convertedWeather);




}