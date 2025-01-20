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
  console.log("------------------>", data?.highlightsData);
  const isDay = data?.currentWeather?.isDay || undefined;
  return (
    <div
      className={`lg:p-8 w-full h-screen bg-slate-200 `}
      // className={`min-h-screen ${
      //   data?.currentWeather?.isDay ? "light-bg-gradient" : "dark-bg-gradient"
      // } sm:p-8 w-full h-screen`}
    >
      {!loading ? (
      <div className="flex items-center justify-between w-full lg:h-full h-fit rounded-2xl lg:flex-row flex-col lg:overflow-hidden">
        <div
          className={`h-full ${
            isDay ? "bg-white text-[#333]" : "night-bg text-white"
          }  lg:w-[20%] w-full p-6 flex flex-col justify-between`}
        >
          <WeatherCard currentWeather={data?.currentWeather} />
          <div className="bg-light_bg bg-no-repeat opacity-70 bg-cover bg-center rounded-xl overflow-hidden light-bg-gradient">
            <p className="text-2xl mb-2 w-full rounded-xl p-8 text-white">
              {data?.currentWeather?.location}
            </p>
          </div>
        </div>
        <div
          className={` ${
            isDay ? "bg-[#f7f6f9] text-[#333]" : "night-bg text-white"
          } w-full h-full p-6`}
        >
          <Forecast forecastData={data?.forecast} />
          <TodaysHighlights todaysHighlight={data?.highlightsData} isDay={isDay} />
        </div>
      </div>
          ) : (
            <Loader />
          )}
    </div>
  );
}

export default App;
