import React from "react";
import WeatherCard from "./components/weatherCard/WeatherCard";
import useFetchWeather from "./hooks/useFetchWeather";
import Forecast from "./components/forecast/Forecast";

function App() {
  const { data, loading, error } = useFetchWeather("Berlin");
  return (
    <div>
      <h3>Weather App</h3>
      <WeatherCard location="Berlin" currentWeather={data?.currentWeather} />
      <Forecast forecastData={data?.forecast} />
    </div>
  );
}

export default App;
