import React from "react";
import { FaSun, FaMoon,FaCloudSun, FaCloud, FaCloudRain, FaSnowflake, FaCloudShowersHeavy, FaBolt } from 'react-icons/fa';

function Forecast({ forecastData }) {
  const getWeatherIcon = (code) => {
    switch (true) {
      case code === 0:
        return <FaSun />;
      case [1, 2, 3].includes(code):
        return <FaCloudSun />;
      case [45, 48].includes(code):
        return <FaCloud />;
      case [51, 53, 55].includes(code):
        return <FaCloudRain />;
      case [61, 63, 65].includes(code):
        return <FaCloudRain />;
      case [71, 73, 75, 77].includes(code):
        return <FaSnowflake />;
      case [80, 81, 82].includes(code):
        return <FaCloudShowersHeavy />;
      case [85, 86].includes(code):
        return <FaSnowflake />;
      case code === 95:
        return <FaBolt />;
      case [96, 99].includes(code):
        return <FaBolt />;
      default:
        return <span>❓</span>;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {(forecastData || []).map((day, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-20 p-4 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-semibold">
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </h3>
            <p className="text-sm">{new Date(day.date).toLocaleDateString()}</p>
            <div className="flex items-center justify-center my-4 text-4xl">
              {getWeatherIcon(day.weatherCode)}
            </div>
            <p className="text-lg font-medium">
              {day.minTemp}°C - {day.maxTemp}°C
            </p>
            <div className="flex items-center text-sm mt-4">
              <FaSun className="mr-2 text-yellow-500" />{" "}
              {new Date(day.sunrise).toLocaleTimeString()}
            </div>
            <div className="flex items-center text-sm mt-2">
              <FaMoon className="mr-2 text-indigo-500" />{" "}
              {new Date(day.sunset).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
