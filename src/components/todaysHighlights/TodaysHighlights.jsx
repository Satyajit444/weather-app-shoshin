import React from "react";

function TodaysHighlights({ todaysHighlight, isDay }) {
  console.log("🚀 ~ TodaysHighlights ~ todaysHighlight:", todaysHighlight);
  const getImageByIcon = (icon) => {
    switch (icon) {
      case "sd":
        return "/assets/sunrise.png";
      case "mt":
        return "/assets/hot.png";
      case "pt":
        return "/assets/precipitation.png";
      case "ws":
        return "/assets/cloud.png";
      default:
        return "/assets/air-qty.png";
    }
  };
  return (
    <div className="p-5 w-full">
      <h1 className="text-[24px] mb-5">Today's Highlights</h1>
      <div className="w-full flex flex-wrap gap-4 justify-between">
        {(todaysHighlight || []).map((highlight, index) => {
          return (
            <div
              key={index}
              className={` ${
                isDay ? "bg-white text-[#333]" : "night-card-bg text-white"
              }  p-4 rounded-xl shadow flex items-center justify-between 
                   w-full sm:w-[48%] lg:w-[23%]`}
            >
              <div className="flex flex-col gap-y-5">
                <h3 className="opacity-40 whitespace-nowrap truncate">
                  {highlight.parameter}
                </h3>

                <h1 className="text-[26px] whitespace-nowrap truncate">
                  {highlight.value}
                </h1>

                <p className="text-sm whitespace-nowrap truncate">
                  {highlight.status}
                </p>
              </div>
              <div>
                <img
                  src={getImageByIcon(highlight.icon)}
                  alt={highlight.parameter}
                  className="highlight-icon h-9 w-9"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodaysHighlights;
