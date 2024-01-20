export const successfullyUploadedView = () => `
<div class="success-content">
  <div class="success-upload-text">Your GIF has been successfully uploaded!</div>
  <div class="success-upload-text">Check it over here:</div>
  <button class="btn-to-uploaded-page">Uploaded</button>
</div>
`;


export const failedUploadGifView = () => `
<div class="failed-upload-gif-content">
  <span class="failed-text-upload">Gif couldn't be uploaded!</span>
  <span class="try-again-text">Please check the GIF and try again.</span>
  <button class="failed-button-upload">Upload Again</button>
</div>
`;