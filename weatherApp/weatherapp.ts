// API Key
const API_KEY = "ba93faee4f19fbe51723e544b1197639";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "https://api.openweathermap.org/geo/1.0";

// City search with API (Geocoding)
async function searchCities(query: string) {
  try {
    const response = await fetch(
      `${GEO_URL}/direct?q=${query}&limit=5&appid=${API_KEY}`
    );
    const cities = await response.json();
    return cities;
  } catch (error) {
    console.error("Városkeresés hiba:", error);
    return [];
  }
}

// Get city weather from API
async function getWeather(cityName: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=hu`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Időjárás API hiba:", error);
  }
}

// Get city hourly forecast from API
async function getHourlyForecast(cityName: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=hu`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Forecast API hiba:", error);
  }
}

// Get city air condition from API
async function getAirQuality(lat: number, lon: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("levegő minőség API hiba:", error);
  }
}

// Put emoji as a weather
function getWeatherIcon(weatherType: string) {
  if (weatherType === "Clear") {
    return "☀️";
  } else if (weatherType === "Clouds") {
    return "☁️";
  } else if (weatherType === "Rain") {
    return "🌧️";
  } else {
    return "🌤️";
  }
}

// Input - Live city search only
const searchInput = document.querySelector<HTMLInputElement>("#searchInput");

// Real city search while typing
searchInput?.addEventListener("input", async (event) => {
  const searchTerm = (event.target as HTMLInputElement).value;

  if (searchTerm.length >= 2) {
    // Minimum 2 characters required
    console.log("Városkeresés:", searchTerm);
    const cities = await searchCities(searchTerm);
    showCitySuggestions(cities);
  } else {
    hideSuggestions();
  }
});

// Display real city suggestions in HTML
function showCitySuggestions(cities: any[]) {
  const dropdown = document.querySelector<HTMLDivElement>("#cityDropdown");

  if (!dropdown) return;

  // Clear dropdown content
  dropdown.innerHTML = "";

  if (cities.length > 0) {
    // Show dropdown list
    dropdown.style.display = "block";

    // Add cities to dropdown list
    cities.forEach((city) => {
      const cityItem = document.createElement("button");
      cityItem.className = "list-group-item list-group-item-action";

      const cityName = city.state
        ? `${city.name}, ${city.state}, ${city.country}`
        : `${city.name}, ${city.country}`;

      cityItem.textContent = cityName;

      // Click event handler for current weather
      cityItem.addEventListener("click", async () => {
        const searchInput =
          document.querySelector<HTMLInputElement>("#searchInput");
        if (searchInput) {
          searchInput.value = city.name; // Only city name
        }

        // Fetch weather data
        const weatherData = await getWeather(city.name);
        displayWeather(weatherData);

        // Fetch forecast data
        const forecastData = await getHourlyForecast(city.name);
        displayHourlyForecast(forecastData);
        displaySevenDayForecast(forecastData);

        // Fetch air quality data using coordinates from weather data
        if (weatherData && weatherData.coord) {
          const airData = await getAirQuality(
            weatherData.coord.lat,
            weatherData.coord.lon
          );
          displayAirQuality(airData);
        }

        // Hide dropdown
        hideSuggestions();
      });

      dropdown.appendChild(cityItem);
    });
  } else {
    hideSuggestions();
  }
}

// Hide suggestions
function hideSuggestions() {
  const dropdown = document.querySelector<HTMLDivElement>("#cityDropdown");
  if (dropdown) {
    dropdown.style.display = "none";
    dropdown.innerHTML = "";
  }
}

//Display current weather data
function displayWeather(weatherData: any) {
  const currentWeatherCard =
    document.querySelector<HTMLInputElement>("#currentWeather");

  if (currentWeatherCard) {
    const icon = getWeatherIcon(weatherData.weather[0].main);

    currentWeatherCard.innerHTML = `
        <div class="card-body d-flex justify-content-between align-items-center"">
            <div>
            <h5 class="card-title">${weatherData.name}</h5>
            <h2>${Math.round(weatherData.main.temp)}°C</h2>
            <p>Páratartalom: ${weatherData.main.humidity}%</p>
            </div>
            <div class="weather-icon" style="font-size: 4rem">${icon}</div>
            </div>  
        `;
  }
}

// Display hourly forecast
function displayHourlyForecast(forecastData: any) {
  const hourlyCard = document.querySelector<HTMLDivElement>("#hourlyForecast");

  if (!hourlyCard) return;

  const hourlyData = forecastData.list.slice(0, 8);

  let hourlyHTML = `
    <div class="card-body">
    <h6 class="card-title"> Mai előrejelzés</h6>
    <div class="hourly-scroll d-flex overflow-auto">
  `;

  hourlyData.forEach((hour: any) => {
    const time = new Date(hour.dt * 1000).toLocaleTimeString("hu-HU", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const icon = getWeatherIcon(hour.weather[0].main);
    const temp = Math.round(hour.main.temp);

    hourlyHTML += `
    <div class="hour-card text-center me-3">
      <small>${time}</small>
      <div>${icon}</div>
      <small>${temp}°</small>
    </div>
      `;
  });

  hourlyHTML += `
    </div>
  </div>`;

  hourlyCard.innerHTML = hourlyHTML;
}

// Display Air data

function displayAirQuality(airData: any) {
  const airCard = document.querySelector<HTMLDivElement>("#airCondition");
  if (!airCard) return;

  const aqi = airData.list[0].main.aqi;
  const components = airData.list[0].components;

  airCard.innerHTML = `
    <div class="card-body">
      <h6 class="card-title">Levegő minőség</h6>
      <div class="row">
        <div class="col-6">
          <div class="aqi-display">
            <span class="aqi-value aqi-${aqi}">${aqi}</span>
            <p class="mb-0">AQI Index</p>
          </div>
        </div>
        <div class="col-6">
          <p class="mb-5">PM2.5: ${Math.round(components.pm2_5)} μg/m³</p>
          <p class="mb-5">PM10: ${Math.round(components.pm10)} μg/m³</p>
          <p class="mb-5">CO: ${Math.round(components.co)} μg/m³</p>
        </div>
      </div>
    </div>`;
}

// Display 7-day forecast
function displaySevenDayForecast(forecastData: any) {
  const sevenDayCard =
    document.querySelector<HTMLDivElement>("#sevenDayForecast");

  if (!sevenDayCard) return;

  // Group forecast data by day (every 8th item = 24 hours)
  const dailyData = [];
  for (let i = 0; i < forecastData.list.length; i += 8) {
    dailyData.push(forecastData.list[i]);
  }

  let sevenDayHTML = `
    <div class="card-body">
      <h6 class="card-title text-center mb-3">7 napos előrejelzés</h6>
      <div class="daily-forecast-container">
  `;

  dailyData.slice(0, 7).forEach((day: any) => {
    const date = new Date(day.dt * 1000);
    const dayName = date.toLocaleDateString("en-EN", { weekday: "short" });
    const dayNumber = date.getDate();
    const icon = getWeatherIcon(day.weather[0].main);
    const temp = Math.round(day.main.temp);

    sevenDayHTML += `
      <div class="day-card">
        <div class="day-info">
          <div class="fw-bold">${dayName}</div>
          <small class="text-muted">${dayNumber}.</small>
        </div>
        <div class="weather-info">
          <span class="weather-icon">${icon}</span>
          <span class="temp">${temp}°C</span>
        </div>
      </div>
    `;
  });

  sevenDayHTML += `
      </div>
    </div>
  `;

  sevenDayCard.innerHTML = sevenDayHTML;
}
