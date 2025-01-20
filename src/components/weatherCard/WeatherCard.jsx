import React from "react";
import GetWeatherIcon from "../common/WeatherIcon";
import SunRiseAndSet from "../common/SunRiseAndSet";

function WeatherCard({ currentWeather }) {
  const options = { size: 50, color: "dark-bg-gradient" };

  return (
    <div className="text-center space-y-4 mb-8">
      {currentWeather && currentWeather.isDay !== undefined ? (
        <img
          src={
            currentWeather.isDay ? "/assets/weather.svg" : "/assets/night.png"
          }
          alt={currentWeather.isDay ? "Daytime Weather" : "Nighttime Weather"}
        />
      ) : (
        // Optionally show a loading spinner or placeholder image while the data is being fetched
        <img src="/assets/loading.gif" alt="Loading weather..." />
      )}

      <GetWeatherIcon
        code={currentWeather?.weatherCode}
        description={true}
        options={options}
      />
      <h2 className="text-6xl font-bold"> {currentWeather?.temperature}°C</h2>
      <h3> {new Date(currentWeather?.time).toLocaleString()}</h3>
      <SunRiseAndSet
        sunrise={currentWeather?.sunrise}
        sunset={currentWeather?.sunset}
      />
    </div>
  );
}

export default WeatherCard;
