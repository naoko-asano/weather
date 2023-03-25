import { findCity } from "@/entities/city";

interface Props {
  cityCode: string;
}

export const Weather = ({ cityCode }: Props) => {
  const city = findCity(cityCode);
  const { name } = city;

  return (
    <>
      <p>都市: {name}</p>
    </>
  );
};
