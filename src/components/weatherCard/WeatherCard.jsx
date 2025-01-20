import React from "react";
import style from "./WeatherCard.module.css";
import GetWeatherIcon from "../forecast/GetWeatherIcon";

function WeatherCard({ currentWeather }) {
 
console.log(currentWeather?.weatherCode);
const options= { size : 50, color :"black" } ;

  return (
    <div className="text-center mb-8">
      <img src="/assets/weather.svg" alt="" />
      <GetWeatherIcon code={currentWeather?.weatherCode} description={true} options={options} />
      <h2 className="text-6xl font-bold"> {currentWeather?.temperature}°C</h2>

      <h3> {new Date(currentWeather?.time).toLocaleString()}</h3>
    </div>
  );
}

export default WeatherCard;
