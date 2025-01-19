function formatWeatherData(data) {
  console.log("🚀 ~ formatWeatherData ~ area:", data.timezone);
  const currentWeather = {
    temperature: data.current.temperature_2m,
    time: data.current.time,
    location: data.timezone,
  };
  const forecast = data.daily.time.slice(0, 3).map((date, index) => ({
    date,
    minTemp: data.daily.temperature_2m_min[index],
    maxTemp: data.daily.temperature_2m_max[index],
    sunrise: data.daily.sunrise[index],
    sunset: data.daily.sunset[index],
  }));

  return { currentWeather, forecast };
}

export default formatWeatherData;
