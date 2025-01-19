import React from "react";
import style from "./WeatherCard.module.css";

function WeatherCard({ currentWeather }) {
  return (
    <div
      className={`${style["weather-ctn"]} bg-neutral-700 text-white rounded-lg`}
    >
      <h2>{'location'}</h2>
      <p>Current Temperature : {currentWeather?.temperature}°C</p>
      <p>Last Updated: {new Date(currentWeather?.time).toLocaleString()}</p>
    </div>
  );
}

export default WeatherCard;
