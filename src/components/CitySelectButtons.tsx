import { Fragment } from "react";

import { CITIES } from "@/entities/city";

interface Props {
  checkedCityCode: string;
  onChange: (cityCode: string) => void;
}

export const CitySelectButtons = ({ checkedCityCode, onChange }: Props) => {
  return (
    <>
      {CITIES.map((city) => (
        <Fragment key={city.code}>
          <input
            type="radio"
            name="city"
            value={city.code}
            checked={city.code === checkedCityCode}
            onChange={(event) => {
              onChange(event.target.value);
            }}
          />
          <label>{city.name}</label>
        </Fragment>
      ))}
    </>
  );
};
