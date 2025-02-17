import { WeatherData } from "../api/useGetWeather";

export type DailyWeatherData = {
  time: string;
  precipitation: number;
  rain: number;
  sunrise: string;
  sunset: string;
  temperatureMax: number;
  temperatureMin: number;
  weatherCode: number;
};

export const mapWeatherData = (
  weatherData: WeatherData | undefined
): DailyWeatherData[] => {
  console.log(weatherData);
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
