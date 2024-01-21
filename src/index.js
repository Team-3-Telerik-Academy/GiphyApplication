import {
  loadPage,
  renderFavorites,
  renderUploadPage,
} from "./events/navigation-events.js";
import {
  renderSearchItems,
} from "./events/search-events.js";
import { hideCategoriesMenu, q, removeActiveNav, showCategoriesMenu } from "./events/helpers.js";
import {
  ANIMALS,
  CATEGORIES,
  EMOJIS,
  EMPTY_HEART,
  FOOD,
  GAMING,
  SEARCH_INPUT,
  SHOW_25_MORE,
  TRENDING,
  UPLOADED,
} from "./common/constants.js";
import { clearSearchInput } from "./events/helpers.js";
import { renderGifDetails } from "./events/navigation-events.js";
import { postRequest } from "./events/upload-events.js";
import { toggleFavoriteStatus } from "./events/favorites-events.js";
import { removeFavorite } from "./data/favorites.js";
import {
  toDarkTheme,
  toLightTheme,
} from "./views/container-light-dark-theme.js";

document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("click", (event) => {

    // nav-events: Trending, Favorites, Uploaded, Emojis, Categories from the falling menu
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute("data-page"));
      clearSearchInput();
    }

    // Gif Details when clicking on a gif
    if (event.target.classList.contains("gif-img")) {
      renderGifDetails(event.target.getAttribute("id"));
      removeActiveNav();
    }

    // Upload Now button when you have no uploads yet on Uploaded page
    if (event.target.id === "no-uploads-button") {
      renderUploadPage();
      removeActiveNav();
    }

    // Upload Again Button after failed upload of a GIF
    if (event.target.classList.contains("failed-button-upload")) {
      renderUploadPage();
      removeActiveNav();
    }

    // Uploaded button after successful upload of a GIF
    if (event.target.classList.contains("btn-to-uploaded-page")) {
      loadPage(UPLOADED);
    }

    // Choose GIF button on the upload GIF page
    if (event.target.classList.contains("upload-btn")) {
      document.getElementById("upload-file-input").click();
      q("#upload-file-input").addEventListener("change", postRequest, false);
    }

    // Favorite Heart
    if (event.target.classList.contains("favorite")) {
      toggleFavoriteStatus(event.target.getAttribute("data-gif-id"));
    }

    // Favorite Heart - remove from Favorites when on Favorites page
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

    // Show More Gifs button on Trending, Categories, Emojis and Search pages
    if (event.target.classList.contains("show-more-button")) {
      if (q('#trending').classList.contains('active')) {
        loadPage(TRENDING, SHOW_25_MORE);
      } else if (q('#animals').classList.contains('active')) {
        loadPage(ANIMALS, SHOW_25_MORE);
      } else if (q('#food').classList.contains('active')) {
        loadPage(FOOD, SHOW_25_MORE);
      } else if (q('#gaming').classList.contains('active')) {
        loadPage(GAMING, SHOW_25_MORE);
      } else if (q('#emojis').classList.contains('active')) {
        loadPage(EMOJIS, SHOW_25_MORE);
      } else if (event.target.classList.contains("show-more-search")) {
        renderSearchItems(SEARCH_INPUT.value, SHOW_25_MORE);
      }
    }

    // Change theme color
    if (event.target.getAttribute("data-btn-theme") === "theme-button") {
      if (!event.target.classList.contains("sun")) {
        event.target.classList.add("sun");
        toLightTheme();
      } else if (event.target.classList.contains("sun")) {
        event.target.classList.remove("sun");
        toDarkTheme();
      }
    }

    // Loading emojis  
    if (event.target.classList.contains("nav-link")) {
      loadPage(event.target.getAttribute('data-page'))
    }
  });

  // Nav Bar Upload GIF button
  q("#uploadId").addEventListener("click", () => {
    renderUploadPage();
    removeActiveNav();
    clearSearchInput();
  });

  // Search bar when pressing ENTER
  SEARCH_INPUT.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      renderSearchItems(event.target.value);
      removeActiveNav();
    }
  });

  // Search bar when pressing the button
  q("#magnifying-glass").addEventListener("click", () => {
    renderSearchItems(SEARCH_INPUT.value);
    removeActiveNav();
  });

  // Categories Falling Menu
  q(CATEGORIES).addEventListener('mouseover', () => {
    showCategoriesMenu();
  });

  q(CATEGORIES).addEventListener('mouseout', () => {
    hideCategoriesMenu();
  });

  q('.dropdown-content').addEventListener('mouseover', () => {
    showCategoriesMenu();
  });

  q('.dropdown-content').addEventListener('mouseout', () => {
    hideCategoriesMenu();
  });

  loadPage(TRENDING);
});
