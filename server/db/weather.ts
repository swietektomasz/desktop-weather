import { Level } from "level";

const weatherDb = new Level("weather", { valueEncoding: "json" });

const saveWeatherByName = async (name: string, weather) => {
  if (!weather) return;

  await weatherDb.put(name, JSON.stringify(weather));
};

const loadWeatherByName = async (name: string) => {
  const weather = await weatherDb.get(name);

  if (weather) {
    return JSON.parse(weather);
  }

  return {};
};

const status = weatherDb.status;

export const weatherDbOptions = () => {
  return {
    loadWeatherByName,
    saveWeatherByName,
    status,
  };
};
