import express from "express";
import cors from "cors";
import { locationDbOptions } from "./db/location";
import { locationRouter } from "./routes/location";
import { ServerStatus } from "./enums";
import { weatherRouter } from "./routes/weather";

export const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:1420",
};

app.use(cors(corsOptions));
app.use(express.json());

// should return a list of locations with their coordinates
// i.e there can be multiple locations under one name, it should return them all and the user should
// choose which one they want, then in a separate request it's saved as a favourite
// To note, it would be nice to cache these, though saving every string that returns something
// might be overkill
app.use("/location", locationRouter);
app.use("/weather", weatherRouter);

// get weather based on saved name, save weather into db

app.get("/status", (req, res) => {
  const locationDbStatus = locationDbOptions().status;

  res.send({ server: ServerStatus.Online, locationDb: locationDbStatus });
});

app.listen(port, () => {
  console.log(`Weather app server listening on port ${port}`);
});
