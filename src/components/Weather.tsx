import { useEffect } from "react";
import { useGetWeather } from "../api/useGetWeather";
import { Favourite } from "../api/useFavourites";
import { Days } from "./Days";
import { mapWeatherData } from "../helpers/mapWeatherData";

export const Weather = ({
  selectedFavourite,
}: {
  selectedFavourite: Favourite | undefined;
}) => {
  const { getWeather, weather } = useGetWeather();

  console.log(weather);

  useEffect(() => {
    if (selectedFavourite) {
      const { name, latitude, longitude } = selectedFavourite;

      getWeather(name, latitude, longitude);
    }
  }, [selectedFavourite]);

  return (
    <div>
      <Days days={mapWeatherData(weather)} />
    </div>
  );
};
