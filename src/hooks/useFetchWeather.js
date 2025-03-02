import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import formatWeatherData from "../utils/formatWeatherData";

const DEFAULT_COORDINATES = { latitude: 52.52, longitude: 13.41 };
const DEFAULT_ERROR_MESSAGE = "Failed to fetch weather data";

export default function useFetchWeather() {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // This useMemo hook is used to memorize api and avoid unnecessary calculations
  const BASE_URL = useMemo(() => {
    const { latitude, longitude } = coordinates;
    const lat = latitude || DEFAULT_COORDINATES.latitude;
    const lon = longitude || DEFAULT_COORDINATES.longitude;

    return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,is_day,weather_code,wind_speed_10m,rain,precipitation,relative_humidity_2m,apparent_temperature,wind_direction_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,sunshine_duration,precipitation_probability_max,wind_speed_10m_max&hourly=&timezone=auto&past_days=3`;
  }, [coordinates]);

  // This useEffect hook Fetches user's geolocation
  useEffect(() => {
    const getCoordinates = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => {
            setCoordinates({
              latitude: coords.latitude,
              longitude: coords.longitude,
            });
          },
          () => {
            setCoordinates(DEFAULT_COORDINATES);
          }
        );
      } else {
        console.warn("Geolocation is not supported by your browser.");
        setCoordinates(DEFAULT_COORDINATES);
      }
    };

    getCoordinates();
  }, []);

  // This useEffect hook Fetches user's weather data

  useEffect(() => {
    if (coordinates.latitude && coordinates.longitude) {
      const fetchWeatherData = async () => {
        setLoading(true);
        setError(null);

        try {
          const response = await axios.get(BASE_URL);
          const formattedData = formatWeatherData(response?.data);
          setData(formattedData);
        } catch (err) {
          console.error("Error fetching weather data:", err);
          setError(DEFAULT_ERROR_MESSAGE);
        } finally {
          setLoading(false);
        }
      };

      fetchWeatherData();
    }
  }, [BASE_URL]);

  return { data, loading, error };
}
