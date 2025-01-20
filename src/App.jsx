import React from "react";
import WeatherCard from "./components/weatherCard/WeatherCard";
import useFetchWeather from "./hooks/useFetchWeather";
import Forecast from "./components/forecast/Forecast";
import "./App.css";
import TodaysHighlights from "./components/todaysHighlights/TodaysHighlights";
function App() {
  const { data, loading, error } = useFetchWeather();

  return (
    <div
      // className={`min-h-screen ${
      //   data?.currentWeather?.isDay ? "light-bg-gradient" : "dark-bg-gradient"
      // } sm:p-8 w-full h-screen`}
    >
      <div className="flex items-center justify-between w-full h-full rounded-2xl mobile:flex-col sm:overflow-hidden">
        <div className="h-full bg-white sm:w-[20%] w-full p-6 flex flex-col justify-between">
          <WeatherCard currentWeather={data?.currentWeather} />
          <div className=" bg-light_bg bg-no-repeat opacity-70 bg-cover bg-center rounded-xl overflow-hidden light-bg-gradient">
            <p className="text-2xl mb-2 w-full rounded-xl p-8 text-white">
              {data?.currentWeather?.location}
            </p>
          </div>
        </div>
        <div className="bg-[#f7f6f9] w-full h-full p-6">
          <Forecast forecastData={data?.forecast} />
          <TodaysHighlights todaysHighlight={data?.todaysHighlight} />
        </div>
      </div>
    </div>
  );
}

export default App;
