import { loadPage, renderUploadPage } from "./src/events/navigation-events.js";
import { renderSearchItems } from "./src/events/search-events.js";
import { q, removeActiveNav } from "./src/events/helpers.js";
import { HOME, SEARCH_INPUT } from "./src/common/constants.js";
import { clearSearchInput } from "./src/events/helpers.js";
import { renderGifDetails } from "./src/events/navigation-events.js";
import { postRequest } from "./src/events/upload-events.js";

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

    if (event.target.id === 'no-uploads-button') {
      renderUploadPage();
      removeActiveNav();
    }

    if (event.target.classList.contains("upload-btn")) {
      document.getElementById('upload-file-input').click();
      q("#upload-file-input").addEventListener('change', postRequest, false); //!!!!
    }

  });

  q('#uploadId').addEventListener('click', () => {
    renderUploadPage();
    removeActiveNav();
    clearSearchInput();
  });


  

  SEARCH_INPUT.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      removeActiveNav();
      renderSearchItems(event.target.value);
    }
  });

  q("#magnifying-glass").addEventListener("click", () => {
    removeActiveNav();
    renderSearchItems(SEARCH_INPUT.value);
  });

  loadPage(HOME);
});
