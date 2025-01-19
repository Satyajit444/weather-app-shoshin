import React from "react";
import WeatherCard from "./components/weatherCard/WeatherCard";
import useFetchWeather from "./hooks/useFetchWeather";
import Forecast from "./components/forecast/Forecast";

function App() {
  const { data, loading, error } = useFetchWeather();
  console.log("🚀 ~ App ~ data:", data);
  return (
    <div>
      <h2>Weather App</h2>
      <h3>{data?.currentWeather?.location}</h3>
      <WeatherCard currentWeather={data?.currentWeather} />
      <Forecast forecastData={data?.forecast} />
    </div>
  );
}

export default App;
