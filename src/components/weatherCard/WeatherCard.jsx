import React from "react";
import style from "./WeatherCard.module.css";
import GetWeatherIcon from "../common/WeatherIcon";
import SunRiseAndSet from "../common/SunRiseAndSet";

function WeatherCard({ currentWeather }) {
  console.log(currentWeather?.weatherCode);
  const options = { size: 50, color: "dark-bg-gradient" };

  return (
    <div className="text-center space-y-4 mb-8">
      <img src="/assets/weather.svg" alt="" />
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
