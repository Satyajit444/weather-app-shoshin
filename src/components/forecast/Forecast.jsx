import React, { Fragment } from "react";
import GetWeatherIcon from "../common/WeatherIcon";
import SunRiseAndSet from "../common/SunRiseAndSet";

function Forecast({ forecastData }) {


  return (
    <Fragment>
      <h1 className="text-[24px] px-5 pt-5">
        Last 3 Day's Forecast
      </h1>
      <div className="w-full flex items-center justify-between p-5 flex-wrap mobile:gap-y-5">
        {(forecastData || []).map((day, index) => (
          <div
            key={index}
            className="bg-gradient p-4 rounded-xl shadow-md sm:w-[30%] w-full bg-forecast_card_bg bg-no-repeat bottom-0 text-white bg-cover"
          >
            <h3 className="text-lg font-semibold">
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </h3>
            <p className="text-sm">{new Date(day.date).toLocaleDateString()}</p>
            <div className="flex items-center justify-center my-4 text-4xl">
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
