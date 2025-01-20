function formatWeatherData(data) {

  const today = new Date().toISOString().split("T")[0];
  const todayIndex = data.daily.time.findIndex((date) => date === today) + 1;

  const forecast = data.daily.time
    .slice(todayIndex, todayIndex + 3)
    .map((date, index) => ({
      date,
      minTemp: data.daily.temperature_2m_min[todayIndex + index],
      maxTemp: data.daily.temperature_2m_max[todayIndex + index],
      weatherCode: data.daily.weathercode[todayIndex + index],
      sunrise: data.daily.sunrise[todayIndex + index],
      sunset: data.daily.sunset[todayIndex + index],
    }));

  const currentWeather = {
    temperature: data.current.temperature_2m,
    time: data.current.time,
    isDay: data.current.is_day,
    location: data.timezone,
    weatherCode: data?.current?.weather_code,
    sunrise: data.daily.sunrise[todayIndex - 1],
    sunset: data.daily.sunset[todayIndex - 1],
    rain: data.current.rain,
  };

  const todaysHighlight = {
    sunshine_duration: data.daily.sunshine_duration[todayIndex - 1],
    maxTemp: data.daily.temperature_2m_max[todayIndex - 1],
    precipitation: data.daily.precipitation_probability_max[todayIndex - 1],
    windSpeed: data.daily.wind_speed_10m_max[todayIndex - 1],
  };

  const highlightsData = [
    {
      parameter: "Sunshine Duration",
      value: `${(todaysHighlight.sunshine_duration/3600).toFixed(2)} hours`,
      status:
        todaysHighlight.sunshine_duration > 8
          ? "Sunny"
          : todaysHighlight.sunshine_duration > 4
          ? "Partly Sunny"
          : "Cloudy",
      icon: "sd",
    },
    {
      parameter: "Max Temperature",
      value: `${todaysHighlight.maxTemp}°C`,
      status:
        todaysHighlight.maxTemp > 30
          ? "Hot"
          : todaysHighlight.maxTemp > 15
          ? "Warm"
          : "Cool",
      icon: "mt",
    },
    {
      parameter: "Precipitation",
      value: `${todaysHighlight.precipitation}%`,
      status:
        todaysHighlight.precipitation > 70
          ? "High"
          : todaysHighlight.precipitation > 40
          ? "Moderate"
          : "Low",
      icon: "pt",
    },
    {
      parameter: "Wind Speed",
      value: `${todaysHighlight.windSpeed} km/h`,
      status:
        todaysHighlight.windSpeed > 50
          ? "Strong"
          : todaysHighlight.windSpeed > 20
          ? "Moderate"
          : "Calm",
      icon: "ws",
    },
  ];

  return { currentWeather, forecast, highlightsData };
}

export default formatWeatherData;
