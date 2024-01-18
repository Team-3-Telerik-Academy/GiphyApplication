import { renderFavoriteStatus } from '../events/favorites-events.js'

export const toGifsView = (data) => `
<div class="gifs">
${data.map(toSingleGifView).join('\n')}
</div>
`

const toSingleGifView = (gif) => `
<div class="gifs-view" data-gif-id="${gif.id}">
    <img src="${gif.images.fixed_width.url}" class="gif-img" alt="">
    <div id="heart-box">
    <span view-details-id='${gif.id}' class='view-details-span'>View Details</span>
    ${renderFavoriteStatus(gif.id)}
    </div>
</div>
`

