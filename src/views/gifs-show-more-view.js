import { toSingleGifView } from './gif-view.js';

export const toShowMoreGifsView = (data) => `
<div id='show-more-and-gifs'>
  <div class="gifs">
    ${data.map(toSingleGifView).join('\n')}
  </div>
  <div id='show-more-button-container'>
    <button class='show-more-button' id='show-more-trending'>Show More</button>
  </div>
</div>
`;