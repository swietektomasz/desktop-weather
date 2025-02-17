import { DailyWeatherData } from "../helpers/mapWeatherData";

export const Days = ({ days }: { days: DailyWeatherData[] }) => {
  return <div>{days.map((day) => day.time)}</div>;
};
