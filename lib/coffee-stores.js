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
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee store",
    page: 1,
    perPage: 6,
  });
  const unsplashResults = photos.response.results;
  const photoResponse = unsplashResults.map((result) => result.urls["small"]);
  const response = await fetch(
    getUrlForCoffeeStores("40.788260,-74.256263", 16093, 13035, 6),
    options
  );
  const data = await response.json();
  // console.log(data);

  return data?.results;
};
