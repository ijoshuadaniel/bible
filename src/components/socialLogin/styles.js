import {StyleSheet} from 'react-native';
import {Colors} from 'constants/colors';
import {fontTypes, getPrimaryFont} from 'constants/fonts';
import {borderRadius} from 'constants/globalstyles';

export const styles = StyleSheet.create({
  SocialLogin: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.white,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: borderRadius,
    margin: 10,
  },
  SocialLoginText: {
    marginLeft: 10,
    fontFamily: getPrimaryFont(fontTypes.MEDIUM),
    fontSize: 20,
    color: Colors.white,
  },
});
