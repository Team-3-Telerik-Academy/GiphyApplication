/**
 * Returns an HTML string representing a loading view with a snail image.
 * 
 * @returns {string} The HTML string representation of the loading view.
 */
export const snailUploadingView = () => `
  <div id='img-text-loading-upload'>
  <img src="../images/snail-loading.gif" alt="Loading Image" id='snail-loading'>
  <div id='loading-upload-text'>Uploading</div>
  </div>
`;
