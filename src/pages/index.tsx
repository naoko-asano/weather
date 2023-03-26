import { CitySelectButtons } from "@/components/CitySelectButtons";
import { Weather } from "@/components/Weather";
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
