import { renderFavoriteStatus } from '../events/favorites-events.js';

/**
 * Generates a string of HTML that represents a view of multiple GIFs.
 *
 * @param {Array<{
 * id: string,
 * rating: string,
 * title: string,
 *  images: {
 *   fixed_width: {
 *    url: string,
 *   },
 *  },
 * user: {
 *  avatar_url: string,
 *  display_name: string,
 * }
 * }>} data - An array of GIF objects.
 * @returns {string} A string of HTML that represents a view of multiple GIFs.
 */
export const toGifsView = (data) => `
<div id='show-more-and-gifs'>
<div class="gifs">
${data.map(toSingleGifView).join('\n')}
</div>
<div class='show-more-button-container show-more-button-active'>
    <button class='show-more-button'>Show More</button>
</div>
</div>
`;


/**
 * Generates a string of HTML that represents a view of a single GIF.
 *
 * @param {{
 * id: string,
 * rating: string,
 * title: string,
 *  images: {
 *   fixed_width: {
 *    url: string,
 *   },
 *  },
 * user: {
 *  avatar_url: string,
 *  display_name: string,
 * }
 * }} gif - A GIF object.
 * @returns {string} A string of HTML that represents a view of a single GIF.
 */
export const toSingleGifView = (gif) => `
<div class="gifs-view" data-gif-id="${gif.id}">
    <img src="${gif.images.fixed_width.url}" class="gif-img" id='${gif.id}' alt="${gif.title}">
    <div id="heart-box">
    ${renderFavoriteStatus(gif.id)}
    </div>
</div>
`;