import { Router } from "express";
import { locationDbOptions } from "../db/location";

export const locationRouter = Router();

locationRouter.get("/:name", async (req, res) => {
  const { saveLocationsByName, loadLocationsByName } = locationDbOptions();
  const savedLocations = await loadLocationsByName(req.params.name);

  if (savedLocations.length > 0) {
    res.send(savedLocations);
    return;
  }

  const searchParams = new URLSearchParams({
    count: "10",
    format: "json",
    language: "en",
    name: req.params.name,
  }).toString();

  const locations = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?" + searchParams
  )
    .then((response) => response.json())
    .then((data) => data);

  saveLocationsByName(req.params.name, locations);

  res.send(locations);
});

locationRouter.post("/favourite", async (req, res) => {
  const { saveLocationFavourite, loadLocationFavourites } = locationDbOptions();

  saveLocationFavourite(req.body.name, [req.body.latitude, req.body.longitude]);

  const favourites = await loadLocationFavourites();

  res.send(favourites);
});

locationRouter.get("/favourites", async (req, res) => {
  const { loadLocationFavourites } = locationDbOptions();

  const favourites = await loadLocationFavourites();

  res.send(favourites);
});
