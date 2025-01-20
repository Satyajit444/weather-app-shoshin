# 🌦️ Weather App

A dynamic and reusable weather application built with React that fetches and displays weather data in real time, including user location, current weather conditions, and a 3-day forecast.

## 🚀 Features

- 🌡️ **Current Weather**: Displays location, temperature, weather description, and an icon representing conditions.
- 📅 **3-Day Forecast**: Includes date, temperature range, and weather conditions.
- 🛠️ **Reusable Components**: Modular React components for fetching and displaying weather data dynamically.
- 🎨 **Engaging UI**: Styled using CSS-in-JS libraries for responsiveness and visual appeal.
- ⚠️ **Error Handling**: Graceful error messages for issues like network failures or invalid API responses.
- 📱 **Responsive Design**: Optimized for all screen sizes and devices.

## 🛠️ Tech Stack

- **React** ⚛️: Frontend library for building user interfaces.
- **Axios** 🔗: For API requests.
- **CSS-in-JS (Styled Components)** 🎨: For styling.
- **API** 🌍: Data from TinyURL Weather API.

## 🏗️ Component Architecture

- **Hooks:**
  - Custom hooks for fetching weather data and managing component states. Hooks like `useFetchWeather` allow for fetching current weather data and 3-day forecasts dynamically. These hooks ensure that data is fetched on component mount and updates the UI with real-time weather conditions.
- **Fetch Data Utilities:**
  - Utilities such as `fetchWeatherData` and `formatWeatherData` are used to structure and process the raw data received from the weather API. They ensure that the data is properly formatted before being passed to the UI components.
- **Assets:**
  - Custom assets (e.g., weather icons and background images) are used to visually represent the weather conditions. These assets are dynamically loaded based on the current weather or forecast data.

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Satyajit444/weather-app-shoshin.git

# Navigate into the project directory
cd weather-app-assignment

# Install dependencies
npm install

# Start the app
npm start

```

## ⚙️ Usage

Upon launching the app, give access to the navigation and it will automatically detect your current location and display weather data.
You can view the current weather, as well as a 3-day forecast for your location.

## 🤝 Contributing

- Fork the repository.
- Create your branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/your-feature).
- Create a new Pull Request.