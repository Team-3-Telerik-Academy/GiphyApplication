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

export const emptyUploadedView = () => `
    <div id="no-uploads-yet">
        <span id="plus">+</span>
        <span id="no-uploads-text">You haven't uploaded anything yet!</span>
        <button id="no-uploads-button">Upload Now</button>
    </div>
`;