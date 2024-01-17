import { FAVORITES, MAIN_SELECTOR, TRENDING, UPLOADED } from '../common/constants.js';
import { loadTrendingGifs } from '../requests/request-service.js';
import { toGifsView } from '../views/gif-view.js';
import { q, setActiveNav } from './helpers.js';

export const loadPage = (page = '') => {
    switch (page) {
        case TRENDING:
            setActiveNav(TRENDING);
            renderTrending();
        // case FAVORITES:
        //     setActiveNav(FAVORITES);
        //     renderFavorites();
        // case UPLOADED:
        //     setActiveNav(UPLOADED);
        //     renderUploaded();
        default:
            return null;
    }
}

const renderTrending = async () => {
    const gifs = await loadTrendingGifs();
    q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
}

// const renderFavorites = () => {
//     q(MAIN_SELECTOR).innerHTML = toGifsView();
// }

// const renderUploaded = () => {
//     q(MAIN_SELECTOR).innerHTML = toGifsView();
// }