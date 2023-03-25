import { CitySelectButtons } from "@/components/CitySelectButtons";
import { Weather } from "@/components/Weather";
import { useState } from "react";

export default function Home() {
  const [cityCode, setCityCode] = useState("13");
  return (
    <>
      <CitySelectButtons onChange={setCityCode} />
      <Weather cityCode={cityCode} />
    </>
  );
}
