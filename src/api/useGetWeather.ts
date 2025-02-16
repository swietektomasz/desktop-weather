import { useState } from "react";

export const useGetWeather = () => {
  const [weather, setWeather] = useState({});

  const getWeather = async (
    name: string,
    latitude: number,
    longitude: number
  ) => {
    console.log(name, latitude, longitude);
    try {
      await fetch(
        `http://localhost:3000/weather/${name}/${latitude}/${longitude}`
      )
        .then((res) => res.json())
        .then((wea) => setWeather(wea));
    } catch (error) {
      console.log(error);
    }
  };

  return { weather, getWeather };
};
