import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

/**
 * Toggles the favorite status of a gif.
 * If the gif is already a favorite, it is removed from favorites, otherwise it is added to favorites.
 * The function also updates the display of the heart icon for the gif.
 * @param {string} gifId - The ID of the gif to toggle.
 */
export const toggleFavoriteStatus = (gifId) => {
  const favorites = getFavorites();
  const heartSpan = q(`span[data-gif-id="${gifId}"]`);
    
  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
    heartSpan.classList.remove('active');
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(gifId);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
};


/**
 * Returns a string of HTML that represents the favorite status of a gif.
 * If the gif is a favorite, the heart icon is displayed as full, otherwise it is displayed as empty.
 * @param {string} gifId - The ID of the gif to render the favorite status for.
 * @returns {string} A string of HTML that represents the favorite status of the gif.
 */
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};