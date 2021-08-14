import {Colors} from './colors';
import {fontTypes, getPrimaryFont, getSecondaryFont} from './fonts';

export const borderRadius = 10;
export const containerPadding = 20;

export const headingStyles = {
  fontFamily: getPrimaryFont(fontTypes.BOLD),
  fontSize: 30,
  marginBottom: 20,
};

export const subheadingStyles = {
  fontFamily: getSecondaryFont(fontTypes.BOLD),
  fontSize: 20,
};
