/**
 * An array of favorite gif IDs retrieved from local storage.
 * @type {Array<string>}
 */
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


/**
 * Adds a gif ID to the favorites array and updates local storage.
 * If the gif ID is already in the favorites array, the function returns without making changes.
 * @param {string} gifId - The ID of the gif to add to favorites.
 */
export const addFavorite = (gifId) => {
  if (favorites.find(id => id === gifId)) {
    return;
  }

  favorites.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};


/**
 * Removes a gif ID from the favorites array and updates local storage.
 * @param {string} gifId - The ID of the gif to remove from favorites.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};


/**
 * Returns a copy of the favorites array.
 * @returns {Array<string>} A copy of the favorites array.
 */
export const getFavorites = () => [...favorites];