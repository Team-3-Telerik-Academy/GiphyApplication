import {
  EMOJIS,
  FAVORITES,
  MAIN_SELECTOR,
  TRENDING,
  UPLOADED,
} from "../common/constants.js";
import { getFavorites } from "../data/favorites.js";
import {
  loadGifById,
  loadRandomGif,
  loadSingleGif,
  loadTrendingGifs,
} from "../requests/request-service.js";
import { toGifsView } from "../views/gif-view.js";
import { toGifDetailed } from "../views/single-gif-view.js";
import { emptyUploadedView, toUploadView } from "../views/upload-view.js";
import { q, setActiveNav } from "./helpers.js";
import { getUploads } from "./upload-events.js";
import { toRandomGifView } from "../views/random-gif-view.js";
import { toShowMoreTrendingGifsView } from "../views/gifs-show-more-view.js";
import { fetchEmojis } from "./emojis-event.js";

export const loadPage = (page = "") => {
  switch (page) {
    case TRENDING:
      setActiveNav(TRENDING);
      return renderTrendingWithShowMore();
    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();
    case UPLOADED:
      setActiveNav(UPLOADED);
      return renderUploaded();
    case EMOJIS:
      setActiveNav(EMOJIS);
      return renderEmojis();
    default:
      return null;
  }
};

const renderTrendingWithShowMore = async (counter = 1) => {
  const gifs = await loadTrendingGifs(counter);
  q(MAIN_SELECTOR).innerHTML = toShowMoreTrendingGifsView(gifs);
};

export const renderFavorites = async () => {
  const favorites = getFavorites();
  const gifs = await Promise.all(favorites.map(loadGifById));

  if (gifs.length === 0) {
    const randomGif = await loadRandomGif();
    q(MAIN_SELECTOR).innerHTML = toRandomGifView(randomGif);
  } else {
    q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
  }
};

const renderUploaded = async () => {
  const gifsId = getUploads();
  const gifs = await Promise.all(gifsId.map(loadGifById));

  if (gifs.length === 0) {
    q(MAIN_SELECTOR).innerHTML = emptyUploadedView();
  } else {
    q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
  }
};

// The page for uploading GIFs
export const renderUploadPage = () => {
  q(MAIN_SELECTOR).innerHTML = toUploadView();
};

export const renderGifDetails = async (id) => {
  const gif = await loadSingleGif(id);
  q(MAIN_SELECTOR).innerHTML = toGifDetailed(gif);
};

// Trending without the button Show More
export const renderTrending = async (counter = 2) => {
  const gifs = await loadTrendingGifs(counter);
  q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
};

// Showing emojis
export const renderEmojis = async () => {
  const emojis = await fetchEmojis();
  q(MAIN_SELECTOR).innerHTML = toGifsView(emojis);
};
