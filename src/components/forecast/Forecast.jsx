import React, { Fragment } from "react";
import {
  FaSun,
  FaMoon,
} from "react-icons/fa";
import GetWeatherIcon from "./GetWeatherIcon";

function Forecast({ forecastData }) {
  // const getWeatherIcon = (code) => {
  //   switch (true) {
  //     case code === 0:
  //       return <FaSun />;
  //     case [1, 2, 3].includes(code):
  //       return <FaCloudSun />;
  //     case [45, 48].includes(code):
  //       return <FaCloud />;
  //     case [51, 53, 55].includes(code):
  //       return <FaCloudRain />;
  //     case [61, 63, 65].includes(code):
  //       return <FaCloudRain />;
  //     case [71, 73, 75, 77].includes(code):
  //       return <FaSnowflake />;
  //     case [80, 81, 82].includes(code):
  //       return <FaCloudShowersHeavy />;
  //     case [85, 86].includes(code):
  //       return <FaSnowflake />;
  //     case code === 95:
  //       return <FaBolt />;
  //     case [96, 99].includes(code):
  //       return <FaBolt />;
  //     default:
  //       return <span>❓</span>;
  //   }
  // };

  return (
    <Fragment>
      <h1 className="text-[24px] px-5 pt-5 text-[#333]">
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
            <GetWeatherIcon code={day.weatherCode} options/>
            </div>
            <p className="text-lg font-medium">
              {day.minTemp}°C - {day.maxTemp}°C
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm mt-4">
                <FaSun className="mr-2 text-yellow-500" />{" "}
                {new Date(day.sunrise).toLocaleTimeString()}
              </div>
              <div className="flex items-center text-sm mt-2">
                <FaMoon className="mr-2 text-indigo-500" />{" "}
                {new Date(day.sunset).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default Forecast;
