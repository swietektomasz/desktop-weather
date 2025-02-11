import express, { Request, Response } from "express";
import { locationDbOptions } from "./db/location";
import { locationRouter } from "./routes/location";

export const app = express();
const port = 3000;

// should return a list of locations with their coordinates
// i.e there can be multiple locations under one name, it should return them all and the user should
// choose which one they want, then in a separate request it's saved as a favourite
// To note, it would be nice to cache these, though saving every string that returns something
// might be overkill
app.use("/location", locationRouter);

// get weather based on saved name, save weather into db

app.listen(port, () => {
  console.log(`Weather app server listening on port ${port}`);
});
