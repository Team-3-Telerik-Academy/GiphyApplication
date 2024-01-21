import { EMOJIS_URL } from "../common/constants.js";

export const fetchEmojis = async () => {
  const response = await fetch(EMOJIS_URL);
  const data = await response.json();
  return data.data;
};


