import { GET_GIFS_BY_SEARCH, MAIN_SELECTOR } from "../common/constants.js";
import { loadSearchGifs } from "../requests/request-service.js";
import { toGifsView } from "../views/gif-view.js";
import { q } from "./helpers.js";

export const renderSearchItems = async (searchTerm) => {
  const gifs = await loadSearchGifs(searchTerm);
  q(MAIN_SELECTOR).innerHTML = toGifsView(gifs);
};
