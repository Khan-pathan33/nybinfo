//  // put your real key here
// let history = [];

// async function getWeather(cityName) {
//     let city = cityName || document.getElementById('cityInput').value.trim();
//     if (!city) {
//         alert('Please enter a city name');
//         return;
//     }

//     // Encode city name (fixes New York, Bengaluru, etc.)
//     const encodedCity = encodeURIComponent(city);

//     const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${API_KEY}&units=metric`;
//     const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${encodedCity}&appid=${API_KEY}&units=metric`;

//     try {
//         // -------- Current Weather --------
//         const weatherRes = await fetch(weatherURL);

//         if (weatherRes.status === 404) {
//             document.getElementById('weatherResult').innerHTML =
//                 `<p style="color:red;">City not found. Please try again.</p>`;
//             document.getElementById('forecast').innerHTML = '';
//             return;
//         }

//         const weatherData = await weatherRes.json();

//         document.getElementById('weatherResult').innerHTML = `
//             <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
//             <p>
//               <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">
//               ${weatherData.weather[0].main}
//             </p>
//             <p>Temperature: ${weatherData.main.temp} °C</p>
//             <p>Humidity: ${weatherData.main.humidity}%</p>
//         `;

//         // -------- Search History --------
//         if (!history.includes(weatherData.name)) {
//             history.unshift(weatherData.name);
//             updateHistoryList();
//         }

//         // -------- 5 Day Forecast --------
//         const forecastRes = await fetch(forecastURL);
//         const forecastData = await forecastRes.json();

//         const forecastDiv = document.getElementById('forecast');
//         forecastDiv.innerHTML = '';

//         const forecastList = forecastData.list.filter(item =>
//             item.dt_txt.includes("12:00:00")
//         );

//         forecastList.forEach(item => {
//             const dayDiv = document.createElement('div');
//             dayDiv.className = 'forecast-day';
//             dayDiv.innerHTML = `
//                 <p>${new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</p>
//                 <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
//                 <p>${item.main.temp.toFixed(1)}°C</p>
//             `;
//             forecastDiv.appendChild(dayDiv);
//         });

//         document.getElementById('cityInput').value = '';

//     } catch (error) {
//         alert('Something went wrong. Please try again later.');
//         console.error(error);
//     }
// }

// // -------- Update History List --------
// function updateHistoryList() {
//     const list = document.getElementById('historyList');
//     list.innerHTML = '';

//     history.forEach(city => {
//         const li = document.createElement('li');
//         li.textContent = city;
//         li.onclick = () => getWeather(city);
//         list.appendChild(li);
//     });
// }



// Mock weather data (fake API)
// const weatherData = {
//     Hyderabad: {
//         country: "IN",
//         temp: 32,
//         humidity: 55,
//         weather: "Sunny",
//         icon: "01d",
//         forecast: [32, 33, 31, 30, 29]
//     },
//     Bengaluru: {
//         country: "IN",
//         temp: 26,
//         humidity: 60,
//         weather: "Cloudy",
//         icon: "03d",
//         forecast: [26, 27, 25, 24, 26]
//     },
//     Mumbai: {
//         country: "IN",
//         temp: 30,
//         humidity: 70,
//         weather: "Rainy",
//         icon: "09d",
//         forecast: [30, 29, 28, 29, 30]
//     },
//     Delhi: {
//         country: "IN",
//         temp: 35,
//         humidity: 40,
//         weather: "Hot",
//         icon: "01d",
//         forecast: [35, 36, 34, 33, 32]
//     }
// };

// let history = [];

// function getWeather(cityName) {
//     const city = cityName || document.getElementById('cityInput').value.trim();

//     if (!city) {
//         alert("Please enter a city name");
//         return;
//     }

//     const data = weatherData[city];

//     if (!data) {
//         document.getElementById('weatherResult').innerHTML =
//             `<p style="color:red;">City not found</p>`;
//         document.getElementById('forecast').innerHTML = '';
//         return;
//     }

//     // Current weather
//     document.getElementById('weatherResult').innerHTML = `
//         <h2>${city}, ${data.country}</h2>
//         <p>
//             <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png">
//             ${data.weather}
//         </p>
//         <p>Temperature: ${data.temp} °C</p>
//         <p>Humidity: ${data.humidity}%</p>
//     `;

//     // Search history
//     if (!history.includes(city)) {
//         history.unshift(city);
//         updateHistoryList();
//     }

//     // 5-day forecast
//     const forecastDiv = document.getElementById('forecast');
//     forecastDiv.innerHTML = '';

//     const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

//     data.forecast.forEach((temp, index) => {
//         const div = document.createElement('div');
//         div.className = 'forecast-day';
//         div.innerHTML = `
//             <p>${days[index]}</p>
//             <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png">
//             <p>${temp}°C</p>
//         `;
//         forecastDiv.appendChild(div);
//     });

//     document.getElementById('cityInput').value = '';
// }

// function updateHistoryList() {
//     const list = document.getElementById('historyList');
//     list.innerHTML = '';

//     history.forEach(city => {
//         const li = document.createElement('li');
//         li.textContent = city;
//         li.onclick = () => getWeather(city);
//         list.appendChild(li);
//     });
// }


document.getElementById("btn").addEventListener("click", () => getWeather());

let history = [];

// Possible weather types and icons
const weatherTypes = [
    { main: "Sunny", icon: "01d", tempRange: [25, 35], humidityRange: [30, 60] },
    { main: "Cloudy", icon: "04d", tempRange: [20, 30], humidityRange: [40, 70] },
    { main: "Rainy", icon: "09d", tempRange: [18, 28], humidityRange: [60, 90] },
    { main: "Stormy", icon: "11d", tempRange: [15, 25], humidityRange: [70, 100] }
];

// Helper function to get random number in range
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate simulated weather
function simulateWeather() {
    const weather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
    return {
        main: weather.main,
        icon: weather.icon,
        temp: randomInRange(weather.tempRange[0], weather.tempRange[1]),
        humidity: randomInRange(weather.humidityRange[0], weather.humidityRange[1]),
        forecast: Array.from({length: 5}, () => randomInRange(weather.tempRange[0], weather.tempRange[1]))
    };
}

function getWeather(cityName) {
    const cityInput = document.getElementById("cityInput");
    const city = cityName || cityInput.value.trim();
    const weatherResult = document.getElementById("weatherResult");
    const forecastDiv = document.getElementById("forecast");
    const historyList = document.getElementById("historyList");

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const data = simulateWeather(); // "computer" generates weather

    // Display current weather
    weatherResult.innerHTML = `
        <h2>${city}, Simulated</h2>
        <p><img src="https://openweathermap.org/img/wn/${data.icon}@2x.png">${data.main}</p>
        <p>Temperature: ${data.temp} °C</p>
        <p>Humidity: ${data.humidity}%</p>
    `;

    // Display 5-day forecast
    forecastDiv.innerHTML = "";
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    data.forecast.forEach((temp, i) => {
        const div = document.createElement("div");
        div.className = "forecast-day";
        div.innerHTML = `
            <p>${days[i]}</p>
            <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png">
            <p>${temp}°C</p>
        `;
        forecastDiv.appendChild(div);
    });

    // Update search history
    if (!history.includes(city)) {
        history.unshift(city);
        historyList.innerHTML = "";
        history.forEach(c => {
            const li = document.createElement("li");
            li.textContent = c;
            li.onclick = () => getWeather(c);
            historyList.appendChild(li);
        });
    }

    cityInput.value = "";
}
