import { CitySelectButtons } from "@/components/citySelectButtons";
import { Weather } from "@/components/weather";
import { useCity } from "@/hooks/useCity";

export default function Home() {
  const { cityCode, setCityCode } = useCity("13");
  return (
    <>
      <CitySelectButtons checkedCityCode={cityCode} onChange={setCityCode} />
      <Weather cityCode={cityCode} />
    </>
  );
}
