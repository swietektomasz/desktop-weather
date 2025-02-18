import { Dispatch, SetStateAction } from "react";
import { DailyWeatherData } from "../helpers/mapWeatherData";

export const Days = ({
  days,
  selectDay,
}: {
  days: DailyWeatherData[];
  selectDay: Dispatch<SetStateAction<DailyWeatherData | undefined>>;
}) => {
  return (
    <div className="flex justify-center">
      {days.map((day) => (
        <button
          key={day.time}
          onClick={() => selectDay(day)}
          className="border-2 rounded-md p-1 m-1"
        >
          {day.time}
        </button>
      ))}
    </div>
  );
};
