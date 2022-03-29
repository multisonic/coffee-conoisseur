// initialize unsplash
import { createApi } from "unsplash-js";

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStores = (latLong, radius, category, limit) => {
  return `https://api.foursquare.com/v3/places/search?ll=${latLong}&radius=${radius}&categories=${category}&limit=${limit}`;
};

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: process.env.FOURSQUARE_API_KEY,
  },
};

export const fetchCoffeeStores = async () => {
  unsplashApi.search.getPhotos({
    query: "cat",
    page: 1,
    perPage: 10,
    color: "green",
    orientation: "portrait",
  });

  const response = await fetch(
    getUrlForCoffeeStores("40.788260,-74.256263", 16093, 13035, 6),
    options
  );
  const data = await response.json();
  // console.log(data);

  return data.results;
};
