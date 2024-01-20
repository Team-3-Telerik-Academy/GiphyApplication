import { MAIN_SELECTOR } from "../common/constants.js";
import { loadSearchGifs } from "../requests/request-service.js";
import { toGifsView } from "../views/gif-view.js";
import { toShowMoreSearchGifsView } from "../views/gifs-show-more-view.js";
import { q } from "./helpers.js";

export const renderSearchItemsWithShowMore = async (searchTerm, count = 1) => {
  const gifs = await loadSearchGifs(searchTerm, count);
  if (gifs.length === 0) {
    return (q(MAIN_SELECTOR).innerHTML = toGifsView(gifs));
  }
  q(MAIN_SELECTOR).innerHTML = toShowMoreSearchGifsView(gifs);
};

export const renderSearchItems = async (searchTerm, count = 1) => {
  const gifs = await loadSearchGifs(searchTerm, count);
  q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
};
