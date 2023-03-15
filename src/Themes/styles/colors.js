const SUN_FLOWER = "#f1c40f";
const ASBESTOS = "#7f8c8d";
const MIDNIGHT_BLUE = "#2c3e50";
const EMERALD = "#2ecc71";
const ALIZARIN = "#e74c3c";
const CLOUDS = "#ecf0f1";
const SILVER = "#bdc3c7";
const GREEN = "rgb(1 160 138)";
const WHITE = "white";
const BLACK = "black";

const common = {
  PRIMARY: GREEN,
  SUCCESS: EMERALD,
  ERROR: ALIZARIN,
};

const light = {
  ...common,
  BACKGROUND: CLOUDS,
  TEXT: BLACK,
  TEXT_SECONDARY: WHITE,
};

const dark = {
  ...common,
  BACKGROUND: MIDNIGHT_BLUE,
  TEXT: WHITE,
  TEXT_SECONDARY: WHITE,
};

export const colors = { light, dark };
