import {
  loadPage,
  renderFavorites,
  renderTrending,
  renderUploadPage,
} from "./src/events/navigation-events.js";
import { renderSearchItems, renderSearchItemsWithShowMore } from "./src/events/search-events.js";
import { q, removeActiveNav } from "./src/events/helpers.js";
import { EMPTY_HEART, HOME, SEARCH_INPUT, UPLOADED } from "./src/common/constants.js";
import { clearSearchInput } from "./src/events/helpers.js";
import { renderGifDetails } from "./src/events/navigation-events.js";
import { postRequest } from "./src/events/upload-events.js";
import { toggleFavoriteStatus } from "./src/events/favorites-events.js";
import { removeFavorite } from "./src/data/favorites.js";

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
      clearSearchInput();
    }

    if (event.target.classList.contains("gif-img")) {
      renderGifDetails(event.target.getAttribute("id"));
      removeActiveNav();
    }

    if (event.target.id === "no-uploads-button") {
      renderUploadPage();
      removeActiveNav();
    }

    if (event.target.classList.contains("failed-button-upload")) {
      renderUploadPage();
      removeActiveNav();
    }

    if (event.target.classList.contains('btn-to-uploaded-page')) {
      loadPage(UPLOADED)
    }

    if (event.target.classList.contains("upload-btn")) {
      document.getElementById("upload-file-input").click();
      q("#upload-file-input").addEventListener("change", postRequest, false);
    }

    if (event.target.classList.contains("favorite")) {
      toggleFavoriteStatus(event.target.getAttribute("data-gif-id"));
    }

    if (
      event.target.classList.contains("favorite") &&
      q("#favorites").classList.contains("active")
    ) {
      const gifId = event.target.getAttribute("data-gif-id");
      removeFavorite(gifId);
      const heartSpan = q(`span[data-gif-id="${gifId}"]`);
      heartSpan.classList.remove("active");
      heartSpan.innerHTML = EMPTY_HEART;
      renderFavorites();
    }

    if (event.target.classList.contains("show-more-button")) {
      if (event.target.id === 'show-more-trending') {
        renderTrending();
      } else if (event.target.id === 'show-more-search') {
        renderSearchItems(SEARCH_INPUT.value, 2);
      }
    }
  });

  q("#uploadId").addEventListener("click", () => {
    renderUploadPage();
    removeActiveNav();
    clearSearchInput();
  });

  SEARCH_INPUT.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      removeActiveNav();
      renderSearchItemsWithShowMore(event.target.value);
    }
  });

  q("#magnifying-glass").addEventListener("click", () => {
    removeActiveNav();
    renderSearchItemsWithShowMore(SEARCH_INPUT.value);
  });

  loadPage(HOME);
});
