import { useEffect, useState } from "react";
import axios from "axios";
import formatWeatherData from "../utils/formatWeatherData";

export default function useFetchWeather(location) {
  // URL to fetch weather reports
  const BASE_URL = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3`;

  // states for data, loader and error response
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(BASE_URL);
        const formatData = formatWeatherData(response?.data);
        setData(formatData);
        console.log("🚀 ~ fetchData ~ response:", data);
      } catch (error) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [location]);

  return { data, loading, error };
}
