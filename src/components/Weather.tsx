import { useEffect } from "react";
import { useGetWeather } from "../api/useGetWeather";
import { Favourite } from "../api/useFavourites";

export const Weather = ({
  selectedFavourite,
}: {
  selectedFavourite: Favourite | undefined;
}) => {
  const { getWeather, weather } = useGetWeather();

  useEffect(() => {
    if (selectedFavourite) {
      const { name, latitude, longitude } = selectedFavourite;

      getWeather(name, latitude, longitude);
    }
  }, []);

  return <div>weather</div>;
};
