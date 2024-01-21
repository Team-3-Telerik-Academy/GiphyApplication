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

export const clearSearchInput = () => {
  if (SEARCH_INPUT.value !== '') {
    SEARCH_INPUT.value = '';
  }
};

export const showCategoriesMenu = () => {
  q("#myDropdown").classList.add("show");
}

export const hideCategoriesMenu = () => {
  q("#myDropdown").classList.remove("show");
}

export const removeActiveShowMoreButton = () => {
  q('.show-more-button-container').classList.remove('show-more-button-active');
}