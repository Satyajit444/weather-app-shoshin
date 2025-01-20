function formatWeatherData(data) {
  console.log("🚀 ~ formatWeatherData ~ area:", data);

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
    precipitation:data.daily.precipitation_probability_max[todayIndex - 1],
    windSpeed:data.daily.wind_speed_10m_max[todayIndex - 1]

  };
  return { currentWeather, forecast, todaysHighlight };
}

export default formatWeatherData;
