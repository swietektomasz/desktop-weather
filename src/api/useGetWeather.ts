import { useState } from "react";
import { WeatherCode } from "../helpers/weatherCodeImageFinder";

export type WeatherData = {
  daily: {
    precipitation_sum: number[];
    rain_sum: number[];
    sunrise: string[];
    sunset: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weather_code: WeatherCode[];
  };
};

export const useGetWeather = () => {
  const [weather, setWeather] = useState<WeatherData | undefined>();

  const getWeather = async (
    name: string,
    latitude: number,
    longitude: number
  ) => {
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
