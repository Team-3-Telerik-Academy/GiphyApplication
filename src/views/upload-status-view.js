/**
 * Returns an HTML string representing a successful upload view.
 * 
 * @returns {string} The HTML string representation of the successful upload view.
 */
export const successfullyUploadedView = () => `
<div class="success-content">
  <div class="success-upload-text">Your GIF has been successfully uploaded!</div>
  <div class="success-upload-text">Check it over here:</div>
  <button class="btn-to-uploaded-page">Uploaded</button>
</div>
`;


/**
 * Returns an HTML string representing a failed upload view.
 * 
 * @returns {string} The HTML string representation of the failed upload view.
 */
export const failedUploadGifView = () => `
<div class="failed-upload-gif-content">
  <span class="failed-text-upload">Gif couldn't be uploaded!</span>
  <span class="try-again-text">Please check the GIF and try again.</span>
  <button class="failed-button-upload">Upload Again</button>
</div>
`;