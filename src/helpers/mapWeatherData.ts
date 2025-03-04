import { WeatherData } from "../api/useGetWeather";
import { WeatherCode } from "./weatherCodeImageFinder";

export type DailyWeatherData = {
  time: string;
  precipitation: number;
  rain: number;
  sunrise: string;
  sunset: string;
  temperatureMax: number;
  temperatureMin: number;
  weatherCode: WeatherCode;
};

export const mapWeatherData = (
  weatherData: WeatherData | undefined
): DailyWeatherData[] => {
  if (!weatherData) return [];

  return weatherData.daily.time.map((date, index) => ({
    time: date,
    precipitation: weatherData.daily.precipitation_sum[index],
    rain: weatherData.daily.rain_sum[index],
    sunrise: weatherData.daily.sunrise[index],
    sunset: weatherData.daily.sunset[index],
    temperatureMax: weatherData.daily.temperature_2m_max[index],
    temperatureMin: weatherData.daily.temperature_2m_min[index],
    weatherCode: weatherData.daily.weather_code[index],
  }));
};
