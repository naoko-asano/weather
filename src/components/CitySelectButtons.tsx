import { CITIES } from "@/entities/city";
import { Fragment, useEffect, useState } from "react";

interface Props {
  // checkedCityCode: string;
  onChange: (cityCode: string) => void;
}

export const CitySelectButtons = ({ onChange }: Props) => {
  return (
    <>
      {CITIES.map((city) => (
        <Fragment key={city.code}>
          <input
            type="radio"
            name="city"
            value={city.code}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
          <label>{city.name}</label>
        </Fragment>
      ))}
    </>
  );
};
