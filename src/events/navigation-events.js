import { FAVORITES, MAIN_SELECTOR, TRENDING, UPLOADED } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';
import { loadRandomGif, loadSingleGif, loadTrendingGifs } from '../requests/request-service.js';
import { toGifsView } from '../views/gif-view.js';
import { toGifDetailed } from '../views/single-gif-view.js';
import { emptyUploadedView, toUploadView } from '../views/upload-view.js';
import { q, setActiveNav } from './helpers.js';
import { fetchGifsById, getUploads } from './upload-events.js';
import { toRandomGifView } from '../views/random-gif-view.js';
import { toShowMoreGifsView } from '../views/gifs-show-more-view.js';

export const loadPage = (page = '') => {
  switch (page) {
  // case HOME:
  //   hideUpperBar();
  //   return renderHome();
  case TRENDING:
    setActiveNav(TRENDING);
    return renderTrendingWithShowMore();
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

// const renderHome = () => {
//   q(MAIN_SELECTOR).innerHTML = toHomeView();
// };

const renderTrendingWithShowMore = async (counter = 1) => {
  const gifs = await loadTrendingGifs(counter);
  q(MAIN_SELECTOR).innerHTML = toShowMoreGifsView(gifs);
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

const renderUploaded = async () => {
  const gifsId = getUploads();
  const gifs = await Promise.all(gifsId.map(fetchGifsById));

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

// Without the button Show More
export const renderTrending = async (counter = 2) => {
  const gifs = await loadTrendingGifs(counter);
  q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
};