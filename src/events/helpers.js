import { SEARCH_INPUT } from '../common/constants.js';

/**
 * Shorthand for document.querySelector
 * @param {string} selector 
 * @returns {Element}
 */
export const q = (selector) => document.querySelector(selector);


/**
 * Shorthand for document.querySelectorAll
 * @param {string} selector 
 * @returns {NodeLists<Element>}
 */
export const qs = (selector) => document.querySelectorAll(selector);


/**
 * Sets the active navigation element based on the provided page.
 *
 * @param {string} page - The page to set as active.
 */
export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array
    .from(navs)
    .forEach(element => element
      .getAttribute('data-page') === page
      ? element.classList.add('active')
      : element.classList.remove('active')
    );
};


/**
 * Removes the 'active' class from all navigation elements.
 */
export const removeActiveNav = () => {
  const navs = qs('a.nav-link');
  Array
    .from(navs)
    .forEach(element => {
      if (element
        .classList.contains('active')) {
        element.classList.remove('active');
      }
    }
    );
};


/**
 * Clears the search input field.
 */
export const clearSearchInput = () => {
  if (SEARCH_INPUT.value !== '') {
    SEARCH_INPUT.value = '';
  }
};


/**
 * Shows the categories menu.
 */
export const showCategoriesMenu = () => {
  q('#myDropdown').classList.add('show');
};


/**
 * Hides the categories menu.
 */
export const hideCategoriesMenu = () => {
  q('#myDropdown').classList.remove('show');
};


/**
 * Removes the 'show-more-button-active' class from the 'show-more-button-container' element.
 */
export const removeActiveShowMoreButton = () => {
  q('.show-more-button-container').classList.remove('show-more-button-active');
};