import { CONTAINER, FOOTER } from "../common/constants.js";
import { q } from "../events/helpers.js";
import { BUTTON_SWITCH_THEMES } from "../common/constants.js";

export const toLightTheme = () => {
  q(CONTAINER).style.backgroundColor = "rgba(173, 216, 230, 0.8)";
  q(BUTTON_SWITCH_THEMES).style.backgroundColor = "#ADD8E6";
  q(BUTTON_SWITCH_THEMES).style.right = "";
  q(BUTTON_SWITCH_THEMES).style.left = "20px";
  q(FOOTER).style.backgroundColor = "rgba(173, 216, 230, 0.8)";
};

export const toDarkTheme = () => {
  q(CONTAINER).style.backgroundColor = "black";
  q(BUTTON_SWITCH_THEMES).style.backgroundColor = "#FFA500";
  q(BUTTON_SWITCH_THEMES).style.left = "";
  q(BUTTON_SWITCH_THEMES).style.right = "1px";
  q(FOOTER).style.backgroundColor = "black";
};
