import React from "react";
import WeatherCard from "./components/weatherCard/WeatherCard";
import useFetchWeather from "./hooks/useFetchWeather";
import Forecast from "./components/forecast/Forecast";

function App() {
  const { data, loading, error } = useFetchWeather();
  console.log("🚀 ~ App ~ data:", data);
  const isDaytime = new Date().getHours() >= 6 && new Date().getHours() <= 18;

  return (
    <div>
      <h2>Weather App</h2>
      <div
    className={`min-h-screen ${
      isDaytime
        ? "bg-gradient-to-b from-yellow-400 to-orange-600"
        : "bg-gradient-to-b from-blue-800 to-indigo-900"
    } text-white flex flex-col items-center p-4`}>
      <h1 className="text-4xl font-bold mb-2">{data?.currentWeather?.location}</h1>
      <WeatherCard currentWeather={data?.currentWeather} />
      <Forecast forecastData={data?.forecast} />
      </div>
    </div>
  );
}

export default App;
