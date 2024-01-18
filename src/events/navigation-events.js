import { FAVORITES, GET_GIF_BY_ID, MAIN_SELECTOR, TRENDING, UPLOADED } from '../common/constants.js';
import { loadSingleGif, loadTrendingGifs } from '../requests/request-service.js';
import { toGifsView } from '../views/gif-view.js';
import { toGifDetailed } from '../views/single-gif-view.js';
import { toUploadView } from '../views/upload-view.js';
import { q, setActiveNav } from './helpers.js';
import { fetchGifsById, getUploads } from './upload-events.js';

export const loadPage = (page = '') => {
    switch (page) {
        case TRENDING:
            setActiveNav(TRENDING);
            return renderTrending();
        // case FAVORITES:
        //     setActiveNav(FAVORITES);
        //     renderFavorites();
        case UPLOADED:
            setActiveNav(UPLOADED);
            return renderUploaded();
        default:
            return null;
    }
}

const renderTrending = async () => {
    const gifs = await loadTrendingGifs();
    q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
}

const renderUploaded = async () => {
    const gifsId = getUploads();
    const gifs = await Promise.all(gifsId.map(fetchGifsById));
    q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
}

export const renderUploadPage = () => {
    q(MAIN_SELECTOR).innerHTML = toUploadView();
}

export const renderGifDetails = async (id) => {
    const gif = await loadSingleGif(id);
    console.log(gif)
    q(MAIN_SELECTOR).innerHTML = toGifDetailed(gif);
}

// const renderFavorites = () => {
//     q(MAIN_SELECTOR).innerHTML = toGifsView();
// }