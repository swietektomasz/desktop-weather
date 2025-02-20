const WeatherImageDay = {
  0: "clear-day",
  1: "cloudy-1-day",
  2: "cloudy-2-day",
  3: "cloudy-2-day",
  45: "fog-day",
  48: "frost-day",
  51: "rainy-1-day",
  53: "rainy-2-day",
  55: "rainy-3-day",
  56: "snow-and-sleet-mix",
  57: "snow-and-sleet-mix",
  61: "rainy-1-day",
  63: "rainy-2-day",
  65: "rainy-3-day",
  66: "rain-and-snow-mix",
  67: "rain-and-snow-mix",
  71: "snowy-1-day",
  73: "snowy-2-day",
  75: "snowy-3-day",
  77: "hail",
  80: "rainy-1-day",
  81: "rainy-2-day",
  82: "rainy-3-day",
  85: "snowy-1-day",
  86: "snowy-3-day",
  95: "isolated-thunderstorms-day",
  99: "scattered-thunderstorms-day",
};

// const WeatherImageNight = {
//   0: "clear-night",
//   1: "cloudy-1-night",
//   2: "cloudy-2-night",
//   3: "cloudy-2-night",
//   45: "fog-night",
//   48: "frost-night",
// };

export type WeatherCode =
  | 0
  | 1
  | 2
  | 3
  | 45
  | 48
  | 51
  | 53
  | 55
  | 56
  | 57
  | 61
  | 63
  | 65
  | 66
  | 67
  | 71
  | 73
  | 75
  | 77
  | 80
  | 81
  | 82
  | 85
  | 86
  | 95
  | 99;

export const weatherCodeImageFinder = (weatherCode: WeatherCode) => {
  return WeatherImageDay[weatherCode];
};
