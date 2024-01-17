import { loadPage } from './src/events/navigation-events.js'

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', (event) => {

        if (event.target.classList.contains('nav-link')) {
            loadPage(event.target.getAttribute('data-page'));
        }
    })
})