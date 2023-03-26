import { useEffect } from "react";

import { findCity } from "@/entities/cities";
import { convertTimeForDisplay } from "@/entities/time";
import { useWeather } from "@/hooks/useWeather";

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
      <p>時間: {convertTimeForDisplay(weather.time)}</p>
      <p>気温: {weather.temperature}</p>
      <p>天気コード: {weather.weatherCode}</p>
    </>
  );
};
