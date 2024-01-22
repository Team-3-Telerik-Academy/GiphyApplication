import {
  loadPage,
  renderFavorites,
  renderUploadPage,
} from './events/navigation-events.js';
import {
  renderSearchItems,
} from './events/search-events.js';
import { hideCategoriesMenu, q, removeActiveNav, showCategoriesMenu } from './events/helpers.js';
import {
  ANIMALS,
  CATEGORIES,
  EMOJIS,
  FOOD,
  GAMING,
  SEARCH_INPUT,
  SHOW_25_MORE,
  TRENDING,
  UPLOADED,
} from './common/constants.js';
import { clearSearchInput } from './events/helpers.js';
import { renderGifDetails } from './events/navigation-events.js';
import { postRequest } from './events/upload-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { toDarkTheme, toLightTheme } from './events/light-dark-theme-event.js';

/**
 * This event listener is triggered when the DOM is fully loaded.
 * It contains another event listener for click events.
 */
document.addEventListener('DOMContentLoaded', () => {

  /**
   * Event listener for click events on the document.
   * Depending on the target of the click event, different functions are called.
   */
  document.addEventListener('click', (event) => {

    // nav-events: Trending, Favorites, Uploaded, Emojis, Categories from the dropdown menu
    if (event.target.classList.contains('nav-link')) {
      clearSearchInput();
      loadPage(event.target.getAttribute('data-page'));
    }

    // Gif Details when clicking on a gif
    if (event.target.classList.contains('gif-img')) {
      removeActiveNav();
      renderGifDetails(event.target.getAttribute('id'));
    }

    // Upload Now button when you have no uploads yet on Uploaded page
    if (event.target.id === 'no-uploads-button') {
      removeActiveNav();
      renderUploadPage();
    }

    // Upload Again Button after failed upload of a GIF
    if (event.target.classList.contains('failed-button-upload')) {
      removeActiveNav();
      renderUploadPage();
    }

    // Uploaded button after successful upload of a GIF
    if (event.target.classList.contains('btn-to-uploaded-page')) {
      loadPage(UPLOADED);
    }

    // Choose GIF button on the Upload page
    if (event.target.classList.contains('upload-btn')) {
      document.getElementById('upload-file-input').click();
      q('#upload-file-input').addEventListener('change', postRequest);
    }

    // Favorite Heart
    if (event.target.classList.contains('favorite')) {
      toggleFavoriteStatus(event.target.getAttribute('data-gif-id'));

      if (q('#favorites').classList.contains('active')) {
        renderFavorites();
      }
    }

    // Show More Gifs button on Trending, Categories, Emojis and Search pages
    if (event.target.classList.contains('show-more-button')) {
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
      } else if (event.target.classList.contains('show-more-search')) {
        renderSearchItems(SEARCH_INPUT.value, SHOW_25_MORE);
      }
    }

    // Change theme color
    if (event.target.getAttribute('data-btn-theme') === 'theme-button') {
      if (!event.target.classList.contains('sun')) {
        event.target.classList.add('sun');
        toLightTheme();
      } else if (event.target.classList.contains('sun')) {
        event.target.classList.remove('sun');
        toDarkTheme();
      }
    }
  });

  /**
   * This event listener is triggered when the 'Upload GIF' button is clicked.
   * It renders the upload page, removes active navigation, and clears the search input.
   */
  q('#uploadId').addEventListener('click', () => {
    renderUploadPage();
    removeActiveNav();
    clearSearchInput();
  });


  /**
  * This event listener is triggered when a keypress event occurs in the search input.
  * If the 'Enter' key is pressed, it either loads the trending page or renders search items,
  * depending on the value of the search input. It also removes active navigation.
  */
  SEARCH_INPUT.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      if (event.target.value === '') {
        loadPage(TRENDING);
      } else {
        renderSearchItems(event.target.value);
        removeActiveNav();
      }
    }
  });


  /**
   * This event listener is triggered when the magnifying glass button is clicked.
   * It either loads the trending page or renders search items,
   * depending on the value of the search input. It also removes active navigation.
   */
  q('#magnifying-glass').addEventListener('click', () => {
    if (SEARCH_INPUT.value === '') {
      loadPage(TRENDING);
    } else {
      renderSearchItems(SEARCH_INPUT.value);
      removeActiveNav();
    }
  });


  /**
   * Event listeners for mouseover and mouseout events on the categories menu and dropdown content.
   * Shows the categories menu when the mouse is over the categories menu or dropdown content.
   */
  q(CATEGORIES).addEventListener('mouseover', showCategoriesMenu);
  q('.dropdown-content').addEventListener('mouseover', showCategoriesMenu);
  /**
   * Hides the categories menu when the mouse is out of the categories menu or dropdown content.
   */
  q(CATEGORIES).addEventListener('mouseout', hideCategoriesMenu);
  q('.dropdown-content').addEventListener('mouseout', hideCategoriesMenu);


  /**
   * Loads the trending page initially.
   */
  loadPage(TRENDING);
});