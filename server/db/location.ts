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
  latitude: number,
  longitude: number
) => {
  if (!name || !latitude || !longitude) return;

  const existingFavourites = await loadLocationFavourites();

  if (existingFavourites.length > 0) {
    const favourites = [...existingFavourites, { name, latitude, longitude }];

    await locationDb.put("favourites", JSON.stringify(favourites));
  }

  await locationDb.put(
    "favourites",
    JSON.stringify([{ name, latitude, longitude }])
  );
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
