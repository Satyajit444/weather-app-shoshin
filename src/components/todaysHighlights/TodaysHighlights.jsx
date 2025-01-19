import React from "react";
import { WiHumidity } from "react-icons/wi";

function TodaysHighlights() {
  const weatherData = [
    {
      parameter: "Humidity",
      value: "12%",
      status: "Normal",
    },
    {
      parameter: "Visibility",
      value: "5.2 km",
      status: "Average",
    },
    {
      parameter: "Air Quality",
      value: "105",
      status: "Unhealthy",
    },
    {
      parameter: "Sunrise & Sunset",
      value: "05:33",
      status: "06:00",
    },
  ];
  return (
    <div className="p-5 w-full">
      <h1 className="text-[24px] text-[#333] mb-5">Today's Highlights</h1>
      <div className="w-full flex justify-between items-center gap-x-5 mobile:flex-wrap mobile:gap-y-4">
        {(weatherData || []).map((data) => {
          return (
            <div className=" bg-white p-4 rounded-xl sm:w-[25%] w-full shadow flex items-center justify-between">
              <div className="flex flex-col gap-y-5">
                <h3 className="opacity-40">{data.parameter}</h3>

                <h1 className="text-[26px]">{data.value}</h1>

                <p className="text-sm">{data.status} </p>
              </div>
              <div>
                <WiHumidity size={40} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodaysHighlights;
