import { loadPage } from "./src/events/navigation-events.js";
import { renderSearchItems } from "./src/events/search-events.js";
import { q } from "./src/events/helpers.js";
import { GET_GIFS_BY_SEARCH, SEARCH_INPUT } from "./src/common/constants.js";
import { clearSearchInput } from "./src/events/helpers.js";
import { renderGifDetails } from "./src/events/navigation-events.js";

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
      clearSearchInput();
    }

    if (event.target.classList.contains("view-details-span")) {
        renderGifDetails(event.target.getAttribute("view-details-id"))
        
    }

  });

  SEARCH_INPUT.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      renderSearchItems(event.target.value);
    }
  });

  q("#magnifying-glass").addEventListener("click", (event) => {
    renderSearchItems(SEARCH_INPUT.value);
  });
});
