import { q } from "../events/helpers.js";

export const HOME = "giphy"; //?

export const TRENDING = "trending";

export const FAVORITES = "favorites";

export const UPLOADED = "uploaded";

export const MAIN_SELECTOR = "#main";

export const FULL_HEART = "❤";

export const EMPTY_HEART = "♡";

export const API_KEY = "q2ZSzq8dzG1pb1zcDaVaoyORSB2zb76M";

export const GET_GIFS_BY_SEARCH = (search, limit = 25, offset = 0) =>
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=${limit}&offset=${offset}&rating=g`;

export const GET_GIF_BY_ID = (id) => `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}&rating=g`;

export const API_TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g`;

export const UPLOAD_URL = `https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`;

export const SEARCH_INPUT = q("#searchInput");
