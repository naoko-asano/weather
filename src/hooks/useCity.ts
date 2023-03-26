import { useState } from "react";

export const useCity = (initialCityCode: string) => {
  const [cityCode, setCityCode] = useState(initialCityCode);

  return {
    cityCode,
    setCityCode,
  };
};
