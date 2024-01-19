import {
  FAVORITES,
  GET_GIF_BY_ID,
  HOME,
  MAIN_SELECTOR,
  TRENDING,
  UPLOADED,
} from "../common/constants.js";
import { getFavorites } from "../data/favorites.js";
import {
  loadRandomGif,
  loadSingleGif,
  loadTrendingGifs,
} from "../requests/request-service.js";
import { toGifsView } from "../views/gif-view.js";
import { toHomeView } from "../views/home-view.js";
import { toGifDetailed } from "../views/single-gif-view.js";
import { emptyUploadedView, toUploadView } from "../views/upload-view.js";
import { q, removeActiveNav, setActiveNav } from "./helpers.js";
import { fetchGifsById, getUploads } from "./upload-events.js";
import { toRandomGifView } from "../views/random-gif-view.js";

export const loadPage = (page = "") => {
  switch (page) {
    case HOME:
      removeActiveNav();
      return renderHome();
    case TRENDING:
      setActiveNav(TRENDING);
      return renderTrending();
    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();
    case UPLOADED:
      setActiveNav(UPLOADED);
      return renderUploaded();
    default:
      return null;
  }
};

const renderTrending = async () => {
  const gifs = await loadTrendingGifs();
  q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
};

const renderUploaded = async () => {
  const gifsId = getUploads();
  const gifs = await Promise.all(gifsId.map(fetchGifsById));

  if (gifs.length === 0) {
    q(MAIN_SELECTOR).innerHTML = emptyUploadedView();
  } else {
    q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
  }
};

const renderHome = () => {
  q(MAIN_SELECTOR).innerHTML = toHomeView();
};

export const renderUploadPage = () => {
  q(MAIN_SELECTOR).innerHTML = toUploadView();
};

export const renderGifDetails = async (id) => {
  const gif = await loadSingleGif(id);
  console.log(gif);
  q(MAIN_SELECTOR).innerHTML = toGifDetailed(gif);
};

export const renderFavorites = async () => {
  const favorites = getFavorites();
  const gifs = await Promise.all(favorites.map(fetchGifsById));

  if (gifs.length === 0) {
    const randomGif = await loadRandomGif();
    q(MAIN_SELECTOR).innerHTML = toRandomGifView(randomGif);
  } else {
    q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
  }
};
