// https://swapi.co/documentation#people
// https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6

const BASE_URL = "https://swapi.co/api/";

export async function baseFetch(url, options = {}) {
  const response = await fetch(url, options);
  return await response.json();
}

export const getStarWars = async path => baseFetch(BASE_URL + path);
