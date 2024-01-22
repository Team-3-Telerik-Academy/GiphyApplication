import { EMPTY_HEART } from '../common/constants.js';

/**
 * Transforms a gif object into a viewable HTML string.
 * 
 * @param {Array<{
 *  id: string,
 *  rating: string,
 *  title: string,
 *  images: {
 *    fixed_width: {
 *      url: string,
 *    },
 *  },
 *  user: {
 *    avatar_url: string,
 *    display_name: string,
 *  }
 * }>} gif - The gif object to transform.
 * 
 * @returns {string} The HTML string representation of the gif.
 */
export const toRandomGifView = (gif) => `
    <div class="random-gif-content">
        <div class="no-fav-gif-text">You don't have any <span id="fav-red">favorites </span> yet!</div>
        <span class="add-fav-gif-text">Add to your favs by clicking the ${EMPTY_HEART} around GIPHY.</span>
        <div class="gifs-view" data-gif-id="${gif.id}">
            <img src="${gif.images.fixed_width.url}" class="gif-img" id='${gif.id}' alt="${gif.title}">
        </div>
    </div>
`;