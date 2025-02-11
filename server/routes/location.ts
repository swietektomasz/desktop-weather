import { Router } from "express";
import { locationDbOptions } from "../db/location";

export const locationRouter = Router();

locationRouter.get("/locations", async (req, res) => {
  const searchParams = new URLSearchParams({
    count: "1",
    format: "json",
    language: "en",
    name: req.body.name,
  }).toString();

  const locations = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?" + searchParams
  )
    .then((response) => response.json())
    .then((data) => data);

  // Before accessing the database, I might need to check it's status, locationDbOptions could have
  // a wrapper to check if options are actually available

  // Save new locations to db, should probably check if they already exist, maybe have some semi-persistent storage
  const { saveLocationsByName } = locationDbOptions();
  // check where the coordinates actually are
  saveLocationsByName(req.body.name, locations);

  res.send(locations);
});

locationRouter.get("/favourites");

locationRouter.post("/favourite");
