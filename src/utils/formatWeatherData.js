function formatWeatherData(data) {
  console.log("🚀 ~ formatWeatherData ~ area:", data.timezone);
  const currentWeather = {
    temperature: data.current.temperature_2m,
    time: data.current.time,
    location: data.timezone,
  };
  const today = new Date().toISOString().split('T')[0];
  const todayIndex = data.daily.time.findIndex(date => date === today)+1;
  
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

  return { currentWeather, forecast };
}

export default formatWeatherData;
