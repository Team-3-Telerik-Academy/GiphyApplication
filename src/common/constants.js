import { q } from "../events/helpers.js";

export const TRENDING = "trending";

export const FAVORITES = "favorites";

export const UPLOADED = "uploaded";

export const EMOJIS = "emojis";

export const MAIN_SELECTOR = "#main";

export const FULL_HEART = "❤";

export const EMPTY_HEART = "♡";

export const API_KEY = "q2ZSzq8dzG1pb1zcDaVaoyORSB2zb76M";

export const GET_GIFS_BY_SEARCH = (search, count = 1, limit = 25) =>
  `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=${
    count * limit
  }&offset=0&rating=g`;

export const GET_GIF_BY_ID = (id) =>
  `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}&rating=g`;

export const GET_TRENDING = (count = 1, limit = 25) =>
  `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${
    count * limit
  }&offset=0&rating=g`;

export const RANDOM_API_URL =
  "https://api.giphy.com/v1/gifs/random?api_key=q2ZSzq8dzG1pb1zcDaVaoyORSB2zb76M&tag=&rating=g";

export const UPLOAD_URL = `https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`;

export const EMOJIS_URL = `https://api.giphy.com/v2/emoji?api_key=${API_KEY}&limit=25&offset=0`;

export const SEARCH_INPUT = q("#searchInput");

export const CONTAINER = ".container";

export const BUTTON_SWITCH_THEMES = ".btn-theme";

export const FOOTER = ".footer";
