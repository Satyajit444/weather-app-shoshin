import React from "react";
import style from "./WeatherCard.module.css";

function WeatherCard({ currentWeather }) {
 
  return (
    <div className="text-center mb-8">
        <img src='/assets/weather.svg' alt="" />
      <h2 className="text-6xl font-bold"> {currentWeather?.temperature}°C</h2>
      <h3> {new Date(currentWeather?.time).toLocaleString()}</h3>
    </div>
  );
}

export default WeatherCard;
