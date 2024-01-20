import { loadPage, renderFavorites, renderTrending, renderUploadPage } from './events/navigation-events.js';
import { renderSearchItems, renderSearchItemsWithShowMore } from './events/search-events.js';
import { q, removeActiveNav } from './events/helpers.js';
import { EMPTY_HEART, SEARCH_INPUT, TRENDING, UPLOADED } from './common/constants.js';
import { clearSearchInput } from './events/helpers.js';
import { renderGifDetails } from './events/navigation-events.js';
import { postRequest } from './events/upload-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { removeFavorite } from './data/favorites.js';

document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('click', (event) => {

    // nav-events: GIPHY, Trending, Favorites, Uploaded
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
      clearSearchInput();
    }

    // Gif Details when clicking on a gif
    if (event.target.classList.contains('gif-img')) {
      renderGifDetails(event.target.getAttribute('id'));
      removeActiveNav();
    }

    // Upload Now button when you have no uploads yet
    if (event.target.id === 'no-uploads-button') {
      renderUploadPage();
      removeActiveNav();
    }

    // Upload Again Button after failed upload of a GIF
    if (event.target.classList.contains('failed-button-upload')) {
      renderUploadPage();
      removeActiveNav();
    }

    // Uploaded button after successful upload of a GIF
    if (event.target.classList.contains('btn-to-uploaded-page')) {
      loadPage(UPLOADED);
    }

    // Choose GIF button on the upload GIF page
    if (event.target.classList.contains('upload-btn')) {
      document.getElementById('upload-file-input').click();
      q('#upload-file-input').addEventListener('change', postRequest, false);
    }

    // Favorite Heart
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));
    }

    // Favorite Heart - remove from Favorites when on Favorites page
    if (event.target.classList.contains('favorite') && q('#favorites').classList.contains('active')) {
      const gifId = event.target.getAttribute('data-gif-id');
      removeFavorite(gifId);
      const heartSpan = q(`span[data-gif-id="${gifId}"]`);
      heartSpan.classList.remove('active');
      heartSpan.innerHTML = EMPTY_HEART;
      renderFavorites();
    }

    // Show More Gifs button on Trending and Search pages
    if (event.target.classList.contains('show-more-button')) {
      if (event.target.id === 'show-more-trending') {
        renderTrending();
      } else if (event.target.id === 'show-more-search') {
        renderSearchItems(SEARCH_INPUT.value, 2);
      }
    }
  });

  // Nav Bar Upload GIF button
  q('#uploadId').addEventListener('click', () => {
    renderUploadPage();
    removeActiveNav();
    clearSearchInput();
  });

  // Search bar when pressing ENTER
  SEARCH_INPUT.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      renderSearchItemsWithShowMore(event.target.value);
      removeActiveNav();
    }
  });

  // Search bar when pressing the button
  q('#magnifying-glass').addEventListener('click', () => {
    renderSearchItemsWithShowMore(SEARCH_INPUT.value);
    removeActiveNav();
  });

  loadPage(TRENDING);
});
