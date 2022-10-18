import color from 'color';
import { black, white,primary, accent, error, background } from './colors';

export default {
  dark: false,
  roundness: 4,
  colors: {
    primary,
    accent,
    accentPlaceholder: color(accent)
      .alpha(0.26)
      .rgb()
      .string(),
    background,
    surface: white,
    error,
    placeholderBackground: "#454549",
    text: black,
    disabled: color(black)
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color(black)
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(black)
      .alpha(0.5)
      .rgb()
      .string(),
    textLight: white,
    disabledLight: color(white)
      .alpha(0.26)
      .rgb()
      .string(),
    placeholderLight: color(white)
      .alpha(0.54)
      .rgb()
      .string(),
  },
};
