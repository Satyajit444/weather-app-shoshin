import React from "react";
import WeatherCard from "./components/weatherCard/WeatherCard";
import useFetchWeather from "./hooks/useFetchWeather";
import Forecast from "./components/forecast/Forecast";
import "./App.css";
import TodaysHighlights from "./components/todaysHighlights/TodaysHighlights";
import Loader from "./components/common/Loader";
import Error from "./components/common/Error";
function App() {
  const { data, loading, error } = useFetchWeather();
  const isDay = data?.currentWeather?.isDay || null;
  return (
    <div className={`lg:p-8 w-full h-screen bg-slate-200 `}>
      {!loading ? (
        <div className="app-ctn">
          <div
            className={`app-top-ctn ${
              isDay ? "bg-white text-[#333]" : "night-bg text-white"
            }`}
          >
            <WeatherCard currentWeather={data?.currentWeather} />
            <div className="location">
              <p className="location-title">{data?.currentWeather?.location}</p>
            </div>
          </div>
          <div
            className={` ${
              isDay ? "bg-[#f7f6f9] text-[#333]" : "night-bg text-white"
            } w-full h-full p-6 bg-cloud-opacity z-10`}
          >
            <Forecast forecastData={data?.forecast} />
            <TodaysHighlights
              todaysHighlight={data?.highlightsData}
              isDay={isDay}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
