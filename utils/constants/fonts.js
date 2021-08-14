const primaryFont = 'poppins-';
const secondaryFont = 'raleway-';

export const fontTypes = {
  BOLD: 'bold',
  MEDIUM: 'medium',
  Light: 'light',
};

export const getPrimaryFont = type => {
  const font = primaryFont + type;
  return font.toString();
};

export const getSecondaryFont = type => {
  const font = secondaryFont + type;
  return font.toString();
};
