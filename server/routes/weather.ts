import { Router } from "express";

export const weatherRouter = Router();

weatherRouter.get("/", async (req) => {
  // return weather data by passed coordinates
});

// save historical weather data by date - useful?
weatherRouter.post("/");
