import { Router } from "express";

export const weatherRouter = Router();

weatherRouter.get("/:name/:latitude/:longitude", async (req, res) => {
  // would be smart to cache requests by date so I don't send as many requests
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
