import { GET_EMOJIS, GET_GIF_BY_ID, GET_TRENDING, RANDOM_API_URL } from '../common/constants.js';
import { GET_GIFS_BY_SEARCH } from '../common/constants.js';

export const loadTrendingGifs = async (limit = 25) => {
  const response = await fetch(GET_TRENDING(limit));

  // if (!response.ok) {}

  const data = await response.json();

  return data.data;
};

export const loadSearchGifs = async (searchTerm, limit = 25) => {
  const data = await fetch(GET_GIFS_BY_SEARCH(searchTerm, limit));
  const response = await data.json();

  return response.data;
};

export const loadSingleGif = async (id) => {
  const data = await fetch(GET_GIF_BY_ID(id));
  const response = await data.json();

  return response.data;
};

export const loadRandomGif = async () => {
  const data = await fetch(RANDOM_API_URL);
  const response = await data.json();
  
  return response.data;
};

export const loadGifById = async (gifId) => {
  const response = await fetch(GET_GIF_BY_ID(gifId));
  const data = await response.json();

  return data.data;
};

export const loadEmojis = async (limit = 25) => {
  const response = await fetch(GET_EMOJIS(limit));
  const data = await response.json();
  return data.data;
};