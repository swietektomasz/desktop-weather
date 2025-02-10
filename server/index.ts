import express, { Request, Response } from "express";
import { locationDbOptions } from "./db/locations";

const app = express();
const port = 3000;

type LocationSearchRequest = {
  name: string;
};

interface TypedRequestBody<T> extends Request {
  body: T;
}

// should return a list of locations with their coordinates
// i.e there can be multiple locations under one name, it should return them all and the user should
// choose which one they want, then in a separate request it's saved as a favourite
// To note, it would be nice to cache these, though saving every string that returns something
// might be overkill
app.get(
  "/locations",
  async (req: TypedRequestBody<LocationSearchRequest>, res: Response) => {
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
  }
);

// get weather based on saved name, save weather into db

app.listen(port, () => {
  console.log(`Weather app server listening on port ${port}`);
});
