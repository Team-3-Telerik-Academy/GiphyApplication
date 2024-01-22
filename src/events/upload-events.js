import { MAIN_SELECTOR, UPLOAD_URL } from '../common/constants.js';
import { snailUploadingView } from '../views/snail-uploading-view.js';
import { failedUploadGifView, successfullyUploadedView } from '../views/upload-status-view.js';
import { q } from './helpers.js';

let uploads = JSON.parse(localStorage.getItem('uploads')) || [];

/**
 * Sends a POST request to upload a file.
 *
 * @returns {Promise<void>} A Promise that resolves when the file has been uploaded and the upload status has been rendered.
 */
export const postRequest = async () => {
  const files = q('#upload-file-input').files;
  const form = new FormData();
  form.append('file', files[0]);
  
  q(MAIN_SELECTOR).innerHTML = snailUploadingView();

  const post = await fetch(UPLOAD_URL, {
    method: 'POST',
    body: form,
  });

  const response = await post.json();

  renderUploadStatus(response);
};


/**
 * Renders the upload status based on the response from the server.
 *
 * @param {Object} response - The response from the server.
 */
const renderUploadStatus = (response) => {
  if (response.meta.status === 200) {
    uploads.push(response.data.id);
    localStorage.setItem('uploads', JSON.stringify(uploads));
    q(MAIN_SELECTOR).innerHTML = successfullyUploadedView();
  } else {
    q(MAIN_SELECTOR).innerHTML = failedUploadGifView();
  }
};


/**
 * Returns the array of uploads.
 *
 * @returns {Array} The array of uploads.
 */
export const getUploads = () => [...uploads];