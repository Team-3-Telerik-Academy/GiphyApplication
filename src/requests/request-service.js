import { API_TRENDING_URL, GET_GIF_BY_ID } from "../common/constants.js";
import { GET_GIFS_BY_SEARCH } from "../common/constants.js";

export const loadTrendingGifs = async () => {
  const response = await fetch(API_TRENDING_URL);

  // if (!response.ok) {}

  const data = await response.json();

  return data.data;
};

export const loadSearchGifs = async (searchTerm = "") => {
  const data = await fetch(GET_GIFS_BY_SEARCH(searchTerm));
  const response = await data.json();

  return response.data;
};

export const loadSingleGif = async (id) => {
  const data = await fetch(GET_GIF_BY_ID(id));
  const response = await data.json();

  return response.data;
};
