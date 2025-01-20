import React from "react";
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudRain,
  FaSnowflake,
  FaCloudShowersHeavy,
  FaBolt,
} from "react-icons/fa";
function GetWeatherIcon({ code, options = {}, description }) {
  const { size = "1em", color = "currentColor" } = options;

  const icon = (code) => {
    const iconProps = {
      size,
      color,
      style: { verticalAlign: "middle" },
    };

    switch (true) {
      case code === 0:
        return {
          icon: <FaSun {...iconProps} />,
          description: "Clear sky",
        };
      case [1, 2, 3].includes(code):
        return {
          icon: <FaCloudSun {...iconProps} />,
          description: "Partly cloudy",
        };
      case [45, 48].includes(code):
        return {
          icon: <FaCloud {...iconProps} />,
          description: "Foggy",
        };
      case [51, 53, 55].includes(code):
        return {
          icon: <FaCloudRain {...iconProps} />,
          description: "Drizzle",
        };
      case [61, 63, 65].includes(code):
        return {
          icon: <FaCloudRain {...iconProps} />,
          description: "Rain",
        };
      case [71, 73, 75, 77].includes(code):
        return {
          icon: <FaSnowflake {...iconProps} />,
          description: "Snow",
        };
      case [80, 81, 82].includes(code):
        return {
          icon: <FaCloudShowersHeavy {...iconProps} />,
          description: "Rain showers",
        };
      case [85, 86].includes(code):
        return {
          icon: <FaSnowflake {...iconProps} />,
          description: "Snow showers",
        };
      case code === 95:
        return {
          icon: <FaBolt {...iconProps} />,
          description: "Thunderstorm",
        };
      case [96, 99].includes(code):
        return {
          icon: <FaBolt {...iconProps} />,
          description: "Thunderstorm with hail",
        };
      default:
        return {
          icon: <span>❓</span>,
          description: "Unknown",
        };
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {icon(code)?.icon}
      {description && <div>{icon(code)?.description}</div>}
    </div>
  );
}

export default GetWeatherIcon;
