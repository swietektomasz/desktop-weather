import { useEffect, useState } from "react";
import { useGetWeather } from "../api/useGetWeather";
import { Favourite } from "../api/useFavourites";
import { Days } from "./Days";
import { DailyWeatherData, mapWeatherData } from "../helpers/mapWeatherData";

export const Weather = ({
  selectedFavourite,
}: {
  selectedFavourite: Favourite | undefined;
}) => {
  const { getWeather, weather } = useGetWeather();
  const [day, selectDay] = useState<DailyWeatherData | undefined>();

  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  const hasCurrentWeather = () => {
    if (weather?.daily.time[0] === formattedDate) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (selectedFavourite && !hasCurrentWeather()) {
      const { name, latitude, longitude } = selectedFavourite;

      getWeather(name, latitude, longitude);
    }
  }, [selectedFavourite]);

  return (
    <div>
      {day && (
        <ul>
          <li>Precipitation: {day.precipitation}mm</li>
          <li>Rain: {day.rain}mm</li>
          <li>Sunrise at: {new Date(day.sunrise).toLocaleTimeString()}</li>
          <li>Sunset at: {new Date(day.sunset).toLocaleTimeString()}</li>
          <li>Max temperature: {day.temperatureMax}C</li>
          <li>Min temperature: {day.temperatureMin}C</li>
          <li>Weather code: {day.weatherCode}</li>
        </ul>
      )}
      <Days days={mapWeatherData(weather)} selectDay={selectDay} />
    </div>
  );
};
