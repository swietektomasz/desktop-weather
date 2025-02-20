import { Dispatch, SetStateAction } from "react";
import { DailyWeatherData } from "../helpers/mapWeatherData";

export const Days = ({
  days,
  selectDay,
}: {
  days: DailyWeatherData[];
  selectDay: Dispatch<SetStateAction<DailyWeatherData | undefined>>;
}) => {
  const formatDate = (date: string) => {
    const day = new Date(date);

    return day.toLocaleDateString(undefined, {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };

  return (
    <div className="flex justify-center">
      {days.map((day) => (
        <button
          key={day.time}
          onClick={() => selectDay(day)}
          className="border-2 rounded-md p-1 m-1"
        >
          {formatDate(day.time)}
        </button>
      ))}
    </div>
  );
};
