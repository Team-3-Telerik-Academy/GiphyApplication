import {
  ANIMALS,
  EMOJIS,
  FAVORITES,
  FOOD,
  GAMING,
  MAIN_SELECTOR,
  SHOW_25_MORE,
  TRENDING,
  UPLOADED,
} from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';
import {
  loadEmojis,
  loadGifById,
  loadRandomGif,
  loadSearchGifs,
  loadSingleGif,
  loadTrendingGifs,
} from '../requests/request-service.js';
import { toGifsView } from '../views/gif-view.js';
import { toGifDetailed } from '../views/single-gif-view.js';
import { emptyUploadedView, toUploadView } from '../views/upload-view.js';
import { hideCategoriesMenu, q, removeActiveShowMoreButton, setActiveNav } from './helpers.js';
import { getUploads } from './upload-events.js';
import { toRandomGifView } from '../views/random-gif-view.js';


/**
 * Loads a page based on the provided page name and limit.
 * @param {string} [page=''] - The name of the page to load.
 * @param {number} [limit=25] - The limit for the number of gifs to load.
 * @returns {Promise<void>|null} - Returns a promise if a page is loaded, otherwise null.
 */
export const loadPage = (page = '', limit = 25) => {
  switch (page) {
  case TRENDING:
    setActiveNav(TRENDING);
    return renderTrending(limit);
  case FAVORITES:
    setActiveNav(FAVORITES);
    return renderFavorites();
  case UPLOADED:
    setActiveNav(UPLOADED);
    return renderUploaded();
  case ANIMALS:
    setActiveNav(ANIMALS);
    hideCategoriesMenu();
    return renderAnimals(limit);
  case FOOD:
    setActiveNav(FOOD);
    hideCategoriesMenu();
    return renderFood(limit);
  case GAMING:
    setActiveNav(GAMING);
    hideCategoriesMenu();
    return renderGaming(limit);
  case EMOJIS:
    setActiveNav(EMOJIS);
    return renderEmojis(limit);
  default:
    return null;
  }
};


/**
 * Renders the trending gifs.
 * @param {number} [limit=25] - The limit for the number of gifs to load.
 * @returns {Promise<void>} - A promise that resolves when the gifs have been rendered.
 */
const renderTrending = async (limit = 25) => {
  const gifs = await loadTrendingGifs(limit);
  q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);

  if (limit === SHOW_25_MORE) {
    removeActiveShowMoreButton();
  }
};


/**
 * Renders the favorite gifs.
 * @returns {Promise<void>} - A promise that resolves when the gifs have been rendered.
 */
export const renderFavorites = async () => {
  const favorites = getFavorites();
  const gifs = await Promise.all(favorites.map(loadGifById));

  const existingGifs = gifs.filter(el => el !== undefined);

  if (existingGifs.length === 0) {
    const randomGif = await loadRandomGif();
    q(MAIN_SELECTOR).innerHTML = toRandomGifView(randomGif);
  } else {
    q(MAIN_SELECTOR).innerHTML = toGifsView(existingGifs);
    removeActiveShowMoreButton();
  }
};


/**
 * Renders the uploaded gifs.
 * @returns {Promise<void>} - A promise that resolves when the gifs have been rendered.
 */
const renderUploaded = async () => {
  const gifsId = getUploads();
  const gifs = await Promise.all(gifsId.map(loadGifById));
  const existingGifs = gifs.filter(el => el !== undefined);

  if (existingGifs.length === 0) {
    q(MAIN_SELECTOR).innerHTML = emptyUploadedView();
  } else {
    q(MAIN_SELECTOR).innerHTML = toGifsView(existingGifs);
    removeActiveShowMoreButton();
  }
};


/**
 * Renders the animal gifs.
 * @param {number} [limit=25] - The limit for the number of gifs to load.
 * @returns {Promise<void>} - A promise that resolves when the gifs have been rendered.
 */
export const renderAnimals = async (limit = 25) => {
  const animals = await loadSearchGifs('animal', limit);
  q(MAIN_SELECTOR).innerHTML = toGifsView(animals);

  if (limit === SHOW_25_MORE) {
    removeActiveShowMoreButton();
  }
};


/**
 * Renders the food gifs.
 * @param {number} [limit=25] - The limit for the number of gifs to load.
 * @returns {Promise<void>} - A promise that resolves when the gifs have been rendered.
 */
const renderFood = async (limit = 25) => {
  const food = await loadSearchGifs('food', limit);
  q(MAIN_SELECTOR).innerHTML = toGifsView(food);

  if (limit === SHOW_25_MORE) {
    removeActiveShowMoreButton();
  }
};


/**
 * Renders the gaming gifs.
 * @param {number} [limit=25] - The limit for the number of gifs to load.
 * @returns {Promise<void>} - A promise that resolves when the gifs have been rendered.
 */
const renderGaming = async (limit = 25) => {
  const games = await loadSearchGifs('game', limit);
  q(MAIN_SELECTOR).innerHTML = toGifsView(games);

  if (limit === SHOW_25_MORE) {
    removeActiveShowMoreButton();
  }
};


/**
 * Renders the emoji gifs.
 * @param {number} [limit=25] - The limit for the number of gifs to load.
 * @returns {Promise<void>} - A promise that resolves when the gifs have been rendered.
 */
export const renderEmojis = async (limit = 25) => {
  const emojis = await loadEmojis(limit);
  q(MAIN_SELECTOR).innerHTML = toGifsView(emojis);

  if (limit === SHOW_25_MORE) {
    removeActiveShowMoreButton();
  }
};


/**
 * Renders the upload page.
 */
export const renderUploadPage = () => {
  q(MAIN_SELECTOR).innerHTML = toUploadView();
};


/**
 * Renders the details of a gif.
 * @param {string} id - The ID of the gif to render.
 * @returns {Promise<void>} - A promise that resolves when the gif details have been rendered.
 */
export const renderGifDetails = async (id) => {
  const gif = await loadSingleGif(id);
  q(MAIN_SELECTOR).innerHTML = toGifDetailed(gif);
};