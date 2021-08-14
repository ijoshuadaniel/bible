import {StyleSheet} from 'react-native';
import {fontTypes, getSecondaryFont} from '../../../utils/constants/fonts';
import {borderRadius} from '../../../utils/constants/globalstyles';

export const styles = StyleSheet.create({
  CustomButton: {
    width: '100%',
    borderRadius: borderRadius,
    padding: 15,
    alignItems: 'center',
  },
  ButtonStyles: {
    fontFamily: getSecondaryFont(fontTypes.BOLD),
    fontSize: 20,
  },
});
