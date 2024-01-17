export const HOME = 'home'; //?

export const TRENDING = 'trending';

export const FAVORITES = 'favorites';

export const UPLOADED = 'uploaded';

export const MAIN_SELECTOR = '#main';

export const FULL_HEART = '❤';

export const EMPTY_HEART = '♡';

export const API_KEY = 'q2ZSzq8dzG1pb1zcDaVaoyORSB2zb76M';

export const API_SEARCH_URL = (search, limit = 25, offset = 0) => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=${limit}&offset=${offset}&rating=g`;

export const API_TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25&offset=0&rating=g`;

export const API_GET_BY_ID_URL = `https://api.giphy.com/v1/gifs/?api_key=${API_KEY}&rating=g`;