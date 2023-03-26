import axios from "axios";
import { findCity } from "@/entities/city";
import { useEffect, useState } from "react";
import { useWeather } from "@/hooks/useWeather";
import { Weather as WeatherType } from "@/types/weather";

interface Props {
  cityCode: string;
}

export const Weather = ({ cityCode }: Props) => {
  const city = findCity(cityCode);
  const { name: cityName } = city;
  const { weather, setWeatherByFetched } = useWeather();

  useEffect(() => {
    setWeatherByFetched(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityCode]);

  return (
    <>
      <p>都市: {cityName}</p>
      <p>時間: {weather.time}</p>
      <p>気温: {weather.temperature}</p>
      <p>天気コード: {weather.weatherCode}</p>
    </>
  );
};
