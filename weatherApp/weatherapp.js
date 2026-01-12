var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// API Key
var API_KEY = "ba93faee4f19fbe51723e544b1197639";
var BASE_URL = "https://api.openweathermap.org/data/2.5";
var GEO_URL = "https://api.openweathermap.org/geo/1.0";
// City search with API (Geocoding)
function searchCities(query) {
    return __awaiter(this, void 0, void 0, function () {
        var response, cities, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(GEO_URL, "/direct?q=").concat(query, "&limit=5&appid=").concat(API_KEY))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    cities = _a.sent();
                    return [2 /*return*/, cities];
                case 3:
                    error_1 = _a.sent();
                    console.error("Városkeresés hiba:", error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Get city weather from API
function getWeather(cityName) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(BASE_URL, "/weather?q=").concat(cityName, "&appid=").concat(API_KEY, "&units=metric&lang=hu"))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_2 = _a.sent();
                    console.error("Időjárás API hiba:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Get city hourly forecast from API
function getHourlyForecast(cityName) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(BASE_URL, "/forecast?q=").concat(cityName, "&appid=").concat(API_KEY, "&units=metric&lang=hu"))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_3 = _a.sent();
                    console.log("Forecast API hiba:", error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Get city air condition from API
function getAirQuality(lat, lon) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(BASE_URL, "/air_pollution?lat=").concat(lat, "&lon=").concat(lon, "&appid=").concat(API_KEY))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_4 = _a.sent();
                    console.error("levegő minőség API hiba:", error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Put emoji as a weather
function getWeatherIcon(weatherType) {
    if (weatherType === "Clear") {
        return "☀️";
    }
    else if (weatherType === "Clouds") {
        return "☁️";
    }
    else if (weatherType === "Rain") {
        return "🌧️";
    }
    else {
        return "🌤️";
    }
}
// Input - Live city search only
var searchInput = document.querySelector("#searchInput");
// Real city search while typing
searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener("input", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var searchTerm, cities;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchTerm = event.target.value;
                if (!(searchTerm.length >= 2)) return [3 /*break*/, 2];
                // Minimum 2 characters required
                console.log("Városkeresés:", searchTerm);
                return [4 /*yield*/, searchCities(searchTerm)];
            case 1:
                cities = _a.sent();
                showCitySuggestions(cities);
                return [3 /*break*/, 3];
            case 2:
                hideSuggestions();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
// Display real city suggestions in HTML
function showCitySuggestions(cities) {
    var _this = this;
    var dropdown = document.querySelector("#cityDropdown");
    if (!dropdown)
        return;
    // Clear dropdown content
    dropdown.innerHTML = "";
    if (cities.length > 0) {
        // Show dropdown list
        dropdown.style.display = "block";
        // Add cities to dropdown list
        cities.forEach(function (city) {
            var cityItem = document.createElement("button");
            cityItem.className = "list-group-item list-group-item-action";
            var cityName = city.state
                ? "".concat(city.name, ", ").concat(city.state, ", ").concat(city.country)
                : "".concat(city.name, ", ").concat(city.country);
            cityItem.textContent = cityName;
            // Click event handler for current weather
            cityItem.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var searchInput, weatherData, forecastData, airData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            searchInput = document.querySelector("#searchInput");
                            if (searchInput) {
                                searchInput.value = city.name; // Only city name
                            }
                            return [4 /*yield*/, getWeather(city.name)];
                        case 1:
                            weatherData = _a.sent();
                            displayWeather(weatherData);
                            return [4 /*yield*/, getHourlyForecast(city.name)];
                        case 2:
                            forecastData = _a.sent();
                            displayHourlyForecast(forecastData);
                            displaySevenDayForecast(forecastData);
                            if (!(weatherData && weatherData.coord)) return [3 /*break*/, 4];
                            return [4 /*yield*/, getAirQuality(weatherData.coord.lat, weatherData.coord.lon)];
                        case 3:
                            airData = _a.sent();
                            displayAirQuality(airData);
                            _a.label = 4;
                        case 4:
                            // Hide dropdown
                            hideSuggestions();
                            return [2 /*return*/];
                    }
                });
            }); });
            dropdown.appendChild(cityItem);
        });
    }
    else {
        hideSuggestions();
    }
}
// Hide suggestions
function hideSuggestions() {
    var dropdown = document.querySelector("#cityDropdown");
    if (dropdown) {
        dropdown.style.display = "none";
        dropdown.innerHTML = "";
    }
}
//Display current weather data
function displayWeather(weatherData) {
    var currentWeatherCard = document.querySelector("#currentWeather");
    if (currentWeatherCard) {
        var icon = getWeatherIcon(weatherData.weather[0].main);
        currentWeatherCard.innerHTML = "\n        <div class=\"card-body d-flex justify-content-between align-items-center\"\">\n            <div>\n            <h5 class=\"card-title\">".concat(weatherData.name, "</h5>\n            <h2>").concat(Math.round(weatherData.main.temp), "\u00B0C</h2>\n            <p>P\u00E1ratartalom: ").concat(weatherData.main.humidity, "%</p>\n            </div>\n            <div class=\"weather-icon\" style=\"font-size: 4rem\">").concat(icon, "</div>\n            </div>  \n        ");
    }
}
// Display hourly forecast
function displayHourlyForecast(forecastData) {
    var hourlyCard = document.querySelector("#hourlyForecast");
    if (!hourlyCard)
        return;
    var hourlyData = forecastData.list.slice(0, 8);
    var hourlyHTML = "\n    <div class=\"card-body\">\n    <h6 class=\"card-title\"> Mai el\u0151rejelz\u00E9s</h6>\n    <div class=\"hourly-scroll d-flex overflow-auto\">\n  ";
    hourlyData.forEach(function (hour) {
        var time = new Date(hour.dt * 1000).toLocaleTimeString("hu-HU", {
            hour: "2-digit",
            minute: "2-digit",
        });
        var icon = getWeatherIcon(hour.weather[0].main);
        var temp = Math.round(hour.main.temp);
        hourlyHTML += "\n    <div class=\"hour-card text-center me-3\">\n      <small>".concat(time, "</small>\n      <div>").concat(icon, "</div>\n      <small>").concat(temp, "\u00B0</small>\n    </div>\n      ");
    });
    hourlyHTML += "\n    </div>\n  </div>";
    hourlyCard.innerHTML = hourlyHTML;
}
// Display Air data
function displayAirQuality(airData) {
    var airCard = document.querySelector("#airCondition");
    if (!airCard)
        return;
    var aqi = airData.list[0].main.aqi;
    var components = airData.list[0].components;
    airCard.innerHTML = "\n    <div class=\"card-body\">\n      <h6 class=\"card-title\">Leveg\u0151 min\u0151s\u00E9g</h6>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div class=\"aqi-display\">\n            <span class=\"aqi-value aqi-".concat(aqi, "\">").concat(aqi, "</span>\n            <p class=\"mb-0\">AQI Index</p>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <p class=\"mb-5\">PM2.5: ").concat(Math.round(components.pm2_5), " \u03BCg/m\u00B3</p>\n          <p class=\"mb-5\">PM10: ").concat(Math.round(components.pm10), " \u03BCg/m\u00B3</p>\n          <p class=\"mb-5\">CO: ").concat(Math.round(components.co), " \u03BCg/m\u00B3</p>\n        </div>\n      </div>\n    </div>");
}
// Display 7-day forecast
function displaySevenDayForecast(forecastData) {
    var sevenDayCard = document.querySelector("#sevenDayForecast");
    if (!sevenDayCard)
        return;
    // Group forecast data by day (every 8th item = 24 hours)
    var dailyData = [];
    for (var i = 0; i < forecastData.list.length; i += 8) {
        dailyData.push(forecastData.list[i]);
    }
    var sevenDayHTML = "\n    <div class=\"card-body\">\n      <h6 class=\"card-title text-center mb-3\">7 napos el\u0151rejelz\u00E9s</h6>\n      <div class=\"daily-forecast-container\">\n  ";
    dailyData.slice(0, 7).forEach(function (day) {
        var date = new Date(day.dt * 1000);
        var dayName = date.toLocaleDateString("en-EN", { weekday: "short" });
        var dayNumber = date.getDate();
        var icon = getWeatherIcon(day.weather[0].main);
        var temp = Math.round(day.main.temp);
        sevenDayHTML += "\n      <div class=\"day-card\">\n        <div class=\"day-info\">\n          <div class=\"fw-bold\">".concat(dayName, "</div>\n          <small class=\"text-muted\">").concat(dayNumber, ".</small>\n        </div>\n        <div class=\"weather-info\">\n          <span class=\"weather-icon\">").concat(icon, "</span>\n          <span class=\"temp\">").concat(temp, "\u00B0C</span>\n        </div>\n      </div>\n    ");
    });
    sevenDayHTML += "\n      </div>\n    </div>\n  ";
    sevenDayCard.innerHTML = sevenDayHTML;
}
