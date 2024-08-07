





const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const city = 'London'; // Example city

function searchWeather() {
    const cityInput = document.getElementById('search-city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            updateWeatherDisplay(data);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function updateWeatherDisplay(data) {
    document.getElementById('weather-container').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
    `;

    data.list.forEach(day => {
        const date = new Date(day.dt_txt);
        const temp = Math.round(day.main.temp - 273.15);
        const weatherCondition = day.weather[0].main;

        document.getElementById('weather-container').innerHTML += `
            <div>
                <p>${date.toLocaleDateString()}</p>
                <p>Temp: ${temp}°C</p>
                <p>Weather: ${weatherCondition}</p>
            </div>
        `;

        if (weatherCondition === 'Clear') {
            document.getElementById('weather-container').innerHTML += '<img src="sunny.png" alt="Sunny">';
        } else if (weatherCondition === 'Rainy') {
            document.getElementById('weather-container').innerHTML += '<img src="rainy.png" alt="Rainy">';
        }
    });
}

// Initial load
searchWeather();
