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
  const response = await fetch(
    getUrlForCoffeeStores("40.788260%2C-74.256263", 16093, 13035, 6),
    options
  );
  const data = await response.json();
  console.log(data);

  return data.results;
};
