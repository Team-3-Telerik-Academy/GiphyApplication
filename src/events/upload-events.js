import {
  GET_GIF_BY_ID,
  MAIN_SELECTOR,
  UPLOAD_URL,
} from "../common/constants.js";
import {
  failedUploadGifView,
  successfullyUploadedView,
} from "../views/upload-status-view.js";
import { q } from "./helpers.js";
import { renderUploadPage } from "./navigation-events.js";

let uploads = JSON.parse(localStorage.getItem("uploads")) || [];

export const postRequest = async () => {
  const files = q("#upload-file-input").files;
  const form = new FormData();
  form.append("file", files[0]);

  const post = await fetch(UPLOAD_URL, {
    method: "POST",
    body: form,
  });

  const response = await post.json();

  renderUploadStatus(response);
};

export const fetchGifsById = async (gifId) => {
  const response = await fetch(GET_GIF_BY_ID(gifId));
  const data = await response.json();

  return data.data;
};

export const getUploads = () => [...uploads];

const renderUploadStatus = (response) => {
  if (response.meta.status === 200) {
    uploads.push(response.data.id);
    localStorage.setItem("uploads", JSON.stringify(uploads));
    q(MAIN_SELECTOR).innerHTML = successfullyUploadedView();
  } else {
    q(MAIN_SELECTOR).innerHTML = failedUploadGifView();
  }
};
