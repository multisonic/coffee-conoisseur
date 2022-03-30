// initialize unsplash
import { createApi } from "unsplash-js";

// on your node server
const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStores = (latLong, radius, category, limit) => {
  return `https://api.foursquare.com/v3/places/search?ll=${latLong}&radius=${radius}&categories=${category}&limit=${limit}`;
};

const foursquareOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: process.env.FOURSQUARE_API_KEY,
  },
};

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    page: 1,
    perPage: 10,
  });
  const unsplashResults = photos.response.results;
  return unsplashResults.map((result) => result.urls["regular"]);
};

export const fetchCoffeeStores = async () => {
  const photos = await getListOfCoffeeStorePhotos();
  const response = await fetch(
    getUrlForCoffeeStores(
      "40.75908970947859,-73.99012735363232",
      16093,
      13035,
      6
    ),
    foursquareOptions
  );
  const data = await response.json();
  // console.log(data);

  return data?.results.map((result, idx) => {
    return {
      // ...result,
      id: result.fsq_id,
      name: result.name,
      address: result.location.address || "",
      town: result.location.locality || "",
      neighborhood: result.location.neighborhood[0] || "",
      imgUrl: photos[idx],
    };
  });
};
