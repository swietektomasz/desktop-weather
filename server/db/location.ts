import { Level } from "level";

const locationDb = new Level("locations", { valueEncoding: "json" });

const saveLocationsByName = async (name: string, locations: string[]) => {
  if (!locations) return;

  await locationDb.put(name, JSON.stringify(locations));
};

const loadLocationsByName = async (name: string) => {
  const locations = await locationDb.get(name);

  if (locations) {
    return JSON.parse(locations);
  }

  return [];
};

const loadLocationFavourites = async () => {
  const favourites = await locationDb.get("favourites");

  if (favourites) {
    return JSON.parse(favourites);
  }

  return [];
};

const saveLocationFavourite = async (
  name: string,
  coordinates: [number, number]
) => {
  if (!name || !coordinates) return;

  const existingFavourites = await loadLocationFavourites();

  const favourites = [...existingFavourites, { name, coordinates }];

  await locationDb.put("favourites", JSON.stringify(favourites));
};

const status = locationDb.status;

export const locationDbOptions = () => {
  return {
    loadLocationsByName,
    saveLocationsByName,
    saveLocationFavourite,
    loadLocationFavourites,
    status,
  };
};
