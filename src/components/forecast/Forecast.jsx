import React, { Fragment } from "react";
import GetWeatherIcon from "../common/WeatherIcon";
import SunRiseAndSet from "../common/SunRiseAndSet";
import style from "./Forecast.module.css";
function Forecast({ forecastData }) {
  return (
    <Fragment>
      <h1 className={style["title"]}>Last 3 Day's Forecast</h1>
      <div className={`${style["forecast-ctn"]}`}>
        {(forecastData || []).map((day, index) => (
          <div key={index} className={`${style["forecast-card"]} bg-gradient bg-forecast_card_bg `}>
            <h3 className="text-lg font-semibold">
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </h3>
            <p className="text-sm">{new Date(day.date).toLocaleDateString()}</p>
            <div className={style["weather-icon"]}>
              <GetWeatherIcon code={day.weatherCode} options />
            </div>
            <p className="text-lg font-medium">
              {day.minTemp}°C - {day.maxTemp}°C
            </p>
            <SunRiseAndSet sunrise={day?.sunrise} sunset={day?.sunrise} />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Forecast;
