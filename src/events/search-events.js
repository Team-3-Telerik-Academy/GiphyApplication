import { MAIN_SELECTOR, SHOW_25_MORE } from '../common/constants.js';
import { loadSearchGifs } from '../requests/request-service.js';
import { toGifsView } from '../views/gif-view.js';
import { q, removeActiveShowMoreButton } from './helpers.js';

/**
 * Renders search items (GIFs) based on the provided search term and limit.
 *
 * @param {string} searchTerm - The term to search for GIFs.
 * @param {number} [limit=25] - The maximum number of GIFs to load (default is 25).
 *
 * @returns {Promise<void>} A Promise that resolves when the GIFs have been loaded and rendered.
 */
export const renderSearchItems = async (searchTerm, limit = 25) => {
  const gifs = await loadSearchGifs(searchTerm, limit);

  q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
  q('.show-more-button').classList.add('show-more-search');

  if (limit === SHOW_25_MORE || gifs.length === 0) {
    removeActiveShowMoreButton();
    q('.show-more-button').classList.remove('show-more-search');
  }
};