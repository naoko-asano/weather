import { City } from "@/types/city";

export const CITIES = [
  {
    code: "13",
    name: "東京",
  },
  {
    code: "14",
    name: "神奈川",
  },
] as const;

export const findCity = (cityCode: string) => {
  const city = CITIES.find((city) => city.code === cityCode);
  if (!city) throw new Error("Not selectable city");
  return city;
};
