import axios from "axios";

const BASE_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3";

const fetchWeatherData = async () => {
  try {
    const response = await axios.get(BASE_URL);
  } catch {}
};
