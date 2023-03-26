import { useState } from "react";
import axios from "axios";
import { createApiUrl } from "@/entities/api";
import { Weather } from "@/types/weather";
import { initialWeather } from "@/entities/weather";
import { City } from "@/types/city";

export const useWeather = () => {
  const [weather, setWeather] = useState<Weather>(initialWeather);

  const fetchWeather = async (params: {
    latitude: string;
    longitude: string;
  }): Promise<Weather> => {
    const requestUrl = createApiUrl(params.latitude, params.longitude);
    const res = await axios.get(requestUrl);
    return {
      ...res.data.current_weather,
      weatherCode: res.data.current_weather.weathercode,
    };
  };

  const setWeatherByFetched = async (city: City) => {
    const currentWeather = await fetchWeather(city);
    setWeather(currentWeather);
  };

  return {
    weather,
    fetchWeather,
    setWeatherByFetched,
  };
};
