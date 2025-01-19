import React from "react";

function Forecast({ forecastData }) {
  console.log("🚀 ~ Forecast ~ forecastData:", forecastData);
  return (
    <div className="bg-red-500">
      {(forecastData || []).map((day, index) => {
        console.log("🚀 ~ { ~ day, index:", day, index)
        return (
          <div key={index}>
            <h3>{new Date(day.date).toLocaleDateString()}</h3>
            <p>
              Temp:{day.minTemp}°C - {day.maxTemp}°C
            </p>
            <p>Sunrise: {new Date(day.sunrise).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(day.sunset).toLocaleTimeString()}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;
