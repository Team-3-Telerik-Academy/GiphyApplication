import { renderFavoriteStatus } from '../events/favorites-events.js'

export const toGifsView = (data) => `
<div class="gifs">
${data.map(toSingleGifView).join('\n')}
</div>
`

export const toSingleGifView = (gif) => `
<div class="gifs-view" data-gif-id="${gif.id}">
    <img src="${gif.images.fixed_width.url}" class="gif-img" id='${gif.id}' alt="${gif.title}">
    <div id="heart-box">
    ${renderFavoriteStatus(gif.id)}
    </div>
</div>
`