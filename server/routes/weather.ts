import { Router } from "express";
import { weatherDbOptions } from "../db/weather";

export const weatherRouter = Router();

weatherRouter.get("/:name/:latitude/:longitude", async (req, res) => {
  const { loadWeatherByName } = weatherDbOptions();
  const savedLocations = await loadWeatherByName(req.params.name);

  if (savedLocations.length > 0) {
    res.send(savedLocations);
    return;
  }

  const searchParams = new URLSearchParams({
    latitude: req.params.latitude,
    longitude: req.params.longitude,
    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum",
    timezone: "auto",
  }).toString();

  const weather = await fetch(
    "https://api.open-meteo.com/v1/forecast?" + searchParams
  )
    .then((response) => response.json())
    .then((data) => data);

  res.send(weather);
});

// save historical weather data by date - useful?
weatherRouter.post("/");
