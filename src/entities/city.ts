import { City } from "@/types/city";

export const CITIES = [
  {
    code: "13",
    name: "東京",
    latitude: "35.689",
    longitude: "139.692",
  },
  {
    code: "14",
    name: "神奈川",
    latitude: "35.448",
    longitude: "139.642",
  },
] as const;

export const findCity = (cityCode: string) => {
  const city = CITIES.find((city) => city.code === cityCode);
  if (!city) throw new Error("Not selectable city");
  return city;
};
