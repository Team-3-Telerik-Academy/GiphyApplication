import { API_TRENDING_URL } from '../common/constants.js';

export const loadTrendingGifs = async () => {
    const response = await fetch(API_TRENDING_URL);

    // if (!response.ok) {}
    
    const data = await response.json();
    
    return data.data;
}