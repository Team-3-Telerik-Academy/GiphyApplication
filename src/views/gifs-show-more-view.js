import { toSingleGifView } from './gif-view.js';

export const toShowMoreTrendingGifsView = (data) => `
<div id='show-more-and-gifs'>
  <div class="gifs">
    ${data.map(toSingleGifView).join('\n')}
  </div>
  <div id='show-more-button-container'>
    <button class='show-more-button' id='show-more-trending'>Show More</button>
  </div>
</div>
`;

export const toShowMoreSearchGifsView = (data) => `
<div id='show-more-and-gifs'>
  <div class="gifs">
    ${data.map(toSingleGifView).join('\n')}
  </div>
  <div id='show-more-button-container'>
    <button class='show-more-button' id='show-more-search'>Show More</button>
  </div>
</div>
`;