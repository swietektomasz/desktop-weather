import { Router } from "express";
import { weatherDbOptions } from "../db/weather";

export const weatherRouter = Router();

weatherRouter.get("/:name/:latitude/:longitude", async (req, res) => {
  const { saveWeatherByName, loadWeatherByName } = weatherDbOptions();
  const savedLocations = await loadWeatherByName(req.params.name);

  if (savedLocations.length > 0) {
    res.send(savedLocations);
    return;
  }

  const searchParams = new URLSearchParams({
    latitude: req.params.latitude,
    longitude: req.params.longitude,
  }).toString();

  const weather = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?" + searchParams
  )
    .then((response) => response.json())
    .then((data) => data);

  res.send(weather);
});

// save historical weather data by date - useful?
weatherRouter.post("/");
