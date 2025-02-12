import { useState } from "react";

export const useGetWeather = () => {
  const [weather, setWeather] = useState({});

  const getWeather = async (coordinates: string) => {
    const fetchedWeather = await fetch("localhost:3000", {
      body: coordinates,
    }).then((res) => res.json());

    setWeather(fetchedWeather);
  };

  return { weather, getWeather };
};
