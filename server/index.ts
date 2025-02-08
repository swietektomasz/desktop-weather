import express, { Request, Response } from "express";

const app = express();
const port = 3000;

type LocationSearchRequest = {
  name: string;
  count: string;
  format: string;
  language: string;
};

interface TypedRequestBody<T> extends Request {
  body: T;
}

app.get(
  "/weather",
  (req: TypedRequestBody<LocationSearchRequest>, res: Response) => {
    const searchParams = new URLSearchParams({
      count: "1",
      format: "json",
      language: "en",
      name: "Pszczyna",
    }).toString();

    console.log(searchParams);

    const locations = fetch(
      "https://geocoding-api.open-meteo.com/v1/search?" + searchParams
    )
      .then((response) => response.json())
      .then((data) => console.log(data));

    // Probably just return a list of possible locations

    res.send("Hello World!");
  }
);

// set up leveldb
// save lat/lon under a name into db
// get weather based on saved name, save weather into db

app.listen(port, () => {
  console.log(`Weather app server listening on port ${port}`);
});
