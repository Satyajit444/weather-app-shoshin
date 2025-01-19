import { useEffect, useState } from "react";
import axios from "axios";
import formatWeatherData from "../utils/formatWeatherData";

export default function useFetchWeather(location) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // states for data, loader, and error response
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let { latitude, longitude } = position.coords;
          console.log(
            "🚀 ~ useEffect ~ latitude, longitude:",
            latitude,
            longitude
          );
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (err) => {
          console.log("🚀 ~ useEffect ~ err:", err);
          setLatitude(52.52); 
          setLongitude(13.41); 
        }
      );
    } else {
      console.log("Geolocation is not supported by your browser.");
      setLatitude(52.52); 
      setLongitude(13.41); 
    }
  }, []);

  const BASE_URL = `https://api.open-meteo.com/v1/forecast?latitude=${
    latitude || 52.52
  }&longitude=${
    longitude || 13.41
  }&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3`;

  useEffect(() => {
    if (latitude && longitude) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await axios.get(BASE_URL);
          const formatData = formatWeatherData(response?.data);
          setData(formatData);
          console.log("🚀 ~ fetchData ~ response:", response?.data);
        } catch (error) {
          setError("Failed to fetch weather data");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [latitude, longitude]);

  return { data, loading, error };
}
