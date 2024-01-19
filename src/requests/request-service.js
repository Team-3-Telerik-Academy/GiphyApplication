import {
  GET_GIF_BY_ID, GET_TRENDING,
} from "../common/constants.js";
import { GET_GIFS_BY_SEARCH } from "../common/constants.js";

export const loadTrendingGifs = async (count = 1) => {
  const response = await fetch(GET_TRENDING(count));

  // if (!response.ok) {}

  const data = await response.json();

  return data.data;
};

export const loadSearchGifs = async (searchTerm, count) => {
  const data = await fetch(GET_GIFS_BY_SEARCH(searchTerm, count));
  const response = await data.json();

  return response.data;
};

export const loadSingleGif = async (id) => {
  const data = await fetch(GET_GIF_BY_ID(id));
  const response = await data.json();

  return response.data;
};

export const loadRandomGif = async () => {
  const data = await fetch('https://api.giphy.com/v1/gifs/random?api_key=q2ZSzq8dzG1pb1zcDaVaoyORSB2zb76M&tag=&rating=g');
  const response = await data.json();
  
  return response.data;
};
