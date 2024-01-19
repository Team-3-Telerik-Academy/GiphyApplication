import { GET_GIF_BY_ID, UPLOAD_URL } from '../common/constants.js';
import { q } from './helpers.js';
import { renderUploadPage } from './navigation-events.js';

let uploads = JSON.parse(localStorage.getItem('uploads')) || [];

export const postRequest = async () => {
    const files = q('#upload-file-input').files;
    console.log(files)
    const form = new FormData();
    form.append('file', files[0]);

    const post = await fetch(UPLOAD_URL, {
        method: 'POST',
        body: form,
    });

    const response = await post.json();
    console.log(response.meta.status);

    uploads.push(response.data.id);
    localStorage.setItem('uploads', JSON.stringify(uploads));

    alert('Your gif was successfully uploaded!');
    renderUploadPage();
};

export const fetchGifsById = async (gifId) => {
    const response = await fetch(GET_GIF_BY_ID(gifId));
    const data = await response.json();

    return data.data;
}

export const getUploads = () => [...uploads];