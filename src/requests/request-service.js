import { GET_EMOJIS, GET_GIF_BY_ID, GET_TRENDING, RANDOM_API_URL } from '../common/constants.js';
import { GET_GIFS_BY_SEARCH } from '../common/constants.js';

/**
 * Loads trending GIFs.
 *
 * @param {number} [limit=25] - The maximum number of GIFs to load (default is 25).
 * @returns {Promise<Array>} A Promise that resolves to an array of trending GIFs.
 */
export const loadTrendingGifs = async (limit = 25) => {
  const response = await fetch(GET_TRENDING(limit));

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return 'Unsuccessful operation! From loadTrendingGIfs function.';
  }
};


/**
 * Loads GIFs based on the provided search term.
 *
 * @param {string} searchTerm - The term to search for GIFs.
 * @param {number} [limit=25] - The maximum number of GIFs to load (default is 25).
 * @returns {Promise<Array>} A Promise that resolves to an array of GIFs.
 */
export const loadSearchGifs = async (searchTerm, limit = 25) => {
  const data = await fetch(GET_GIFS_BY_SEARCH(searchTerm, limit));

  if (data.ok) {
    const response = await data.json();
    return response.data;
  } else {
    return 'Unsuccessful operation! From loadSearchGifs function.';
  }
};


/**
 * Loads a single GIF by its ID.
 *
 * @param {string} id - The ID of the GIF.
 * @returns {Promise<Object>} A Promise that resolves to the GIF object.
 */
export const loadSingleGif = async (id) => {
  const data = await fetch(GET_GIF_BY_ID(id));

  if (data.ok) {
    const response = await data.json();
    return response.data;
  } else {
    return 'Unsuccessful operation! From loadSingleGif function.';
  }
};


/**
 * Loads a random GIF.
 *
 * @returns {Promise<Object>} A Promise that resolves to the GIF object.
 */
export const loadRandomGif = async () => {
  const data = await fetch(RANDOM_API_URL);

  if (data.ok) {
    const response = await data.json();
    return response.data;
  } else {
    return 'Unsuccessful operation! From loadRandomGif function.';
  }
};


/**
 * Loads a GIF by its ID.
 *
 * @param {string} gifId - The ID of the GIF.
 * @returns {Promise<Object>} A Promise that resolves to the GIF object, or undefined if the response was not OK.
 */
export const loadGifById = async (gifId) => {
  const response = await fetch(GET_GIF_BY_ID(gifId));

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return;
  }
};


/**
 * Loads emojis.
 *
 * @param {number} [limit=25] - The maximum number of emojis to load (default is 25).
 * @returns {Promise<Array>} A Promise that resolves to an array of emojis.
 */
export const loadEmojis = async (limit = 25) => {
  const response = await fetch(GET_EMOJIS(limit));

  if (response.ok) {
    const data = await response.json();
    return data.data;
  } else {
    return 'Unsuccessful operation! From loadRandomGif function.';
  }
};