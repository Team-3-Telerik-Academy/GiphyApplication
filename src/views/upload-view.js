/**
 * Generates a string of HTML to create a view for uploading files.
 * The view includes a title, text instructions, an upload box with file type instructions,
 * and a button for choosing a file to upload.
 *
 * @returns {string} A string of HTML for the upload view.
 */
export const toUploadView = () => `
<div class='background-content'>
<div id="upload-content">
        <div id="upload-title"><span id="GIPHY"> GIPHY <span id="UPLOAD">Upload</span></div>
        <span id="upload-text">Upload your collection of GIFs</span>
        <div id="upload-box">
            <span id="gif-icon">GIF</span>
            <span id="gif-text">GIF</span>
            <span id="upload-type-of-gif-text">Upload a GIF, MP4, MOV, OR WebM.</span>
            <input type="file" name="upload-file" id="upload-file-input">
            <label for="upload-file" id="uploadLabel" class="upload-btn">Choose GIF</label>
        </div>
    </div>
    </div>
`;


/**
 * Generates a string of HTML to create a view for when no files have been uploaded.
 * The view includes a plus sign, a text message indicating no uploads, and a button for uploading now.
 *
 * @returns {string} A string of HTML for the empty uploaded view.
 */
export const emptyUploadedView = () => `
    <div id="no-uploads-yet">
        <span id="plus">+</span>
        <span id="no-uploads-text">You haven't uploaded anything yet!</span>
        <button id="no-uploads-button">Upload Now</button>
    </div>
`;