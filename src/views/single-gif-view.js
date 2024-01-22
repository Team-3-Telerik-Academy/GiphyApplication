import { renderFavoriteStatus } from '../events/favorites-events.js';

/**
 * Checks if a user exists for the gif and returns the appropriate HTML string.
 * 
 * @param {Object} gif - The gif object to check.
 * @returns {string} The HTML string representation of the user.
 */
const userNameExist = (gif) => {
  return gif.user ? `<img src="${gif.user.avatar_url}" id = "user-avatar" alt="">
    <span id = 'display-username'>${gif.user.display_name}</span>` : '<span id = \'display-username\'>Uploaded by: Unknown user </span>';
};


/**
 * Checks if a rating exists for the gif and returns the appropriate HTML string.
 * 
 * @param {Object} gif - The gif object to check.
 * @returns {string} The HTML string representation of the rating.
 */
const ratingExist = (gif) => `<span class="gif-rating">Rating: ${gif.rating ? gif.rating : 'Unrated'}</span>`;


/**
 * Transforms a gif object into a detailed viewable HTML string.
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
 *    username: string,
 *  }
 * }>} gif - The gif object to transform.
 * 
 * @returns {string} The HTML string representation of the gif.
 */
export const toGifDetailed = (gif) => `
    <div id="to-single-gif-view">
    <div class="gif-content-left">
        <div class="img-view">
            ${userNameExist(gif)}
        </div>
        <div class="gif-information">
            <span class="uploadedOn">Uploaded on: ${gif.import_datetime}</span>
            ${ratingExist(gif)}
            <span class="gif-source">Source: ${gif.images.original.height} x ${gif.images.original.width} px</span>
        </div>
    </div>
    <div class="gif-content-right">
    <span class="gif-title">${gif.title}</span>
    <div class="gifs-view" data-gif-id="${gif.id}">
    <div id='img-heart-box'>
    <img src="${gif.images.fixed_width.url}" class="gif-img-sigle-view" id='${gif.id}' alt="${gif.title}">
    <div id="heart-box">
    ${renderFavoriteStatus(gif.id)}
    </div>
    </div>
</div>
    </div>
</div> `;