const userNameExist = (gif) => {
  return gif.user ? `<img src="${gif.user.avatar_url}" id = "user-avatar" alt="">
    <span id = 'display-username'>${gif.user.display_name}</span>` : `<span id = 'display-username'>Uploaded by: Unknown user </span>`
};

const ratingExist = (gif) => `<span class="gif-rating">Rating: ${gif.rating ? gif.rating : 'Unrated'}</span>`

export const toGifDetailed = (gif) => `
    <div id="to-single-gif-view">
    <div class="gif-content-left">
        <div class="img-view">
            ${userNameExist(gif)}
        </div>
        <div class="gif-information">
            <span class="uploadedOn">Uploaded on: ${gif.import_datetime}</span>
            ${ratingExist(gif)}
            <span class="gif-source">Source: ${gif.images.original.height} x ${gif.images.original.width
  } px</span>
        </div>
    </div>
    <div class="gif-content-right">
        <span class="gif-title">${gif.title}</span>
        <img src="${gif.images.fixed_width.url
  }" id="gif-details-image-view" alt="">
    </div>
</div> `;