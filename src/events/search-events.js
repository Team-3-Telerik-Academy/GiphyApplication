import { MAIN_SELECTOR, SHOW_25_MORE } from "../common/constants.js";
import { loadSearchGifs } from "../requests/request-service.js";
import { toGifsView } from "../views/gif-view.js";
import { q, removeActiveShowMoreButton } from "./helpers.js";


export const renderSearchItems = async (searchTerm, limit = 25) => {
  const gifs = await loadSearchGifs(searchTerm, limit);

  q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
  q('.show-more-button').classList.add('show-more-search');

  if (limit === SHOW_25_MORE || gifs.length === 0) {
    removeActiveShowMoreButton();
    q('.show-more-button').classList.remove('show-more-search');
  }
};