import {StyleSheet} from 'react-native';
import {Colors} from 'constants/colors';
import {getPrimaryFont, fontTypes} from 'constants/fonts';
import {borderRadius, containerPadding} from 'constants/globalstyles';

export const styles = StyleSheet.create({
  LandingScreens: {
    height: '100%',
    width: '100%',
    padding: 20,
    paddingTop: 70,
    paddingBottom: 30,
    backgroundColor: Colors.orange,
    justifyContent: 'space-between',
  },
  Logo: {
    fontFamily: getPrimaryFont(fontTypes.BOLD),
    fontSize: 40,
    color: Colors.white,
  },
  Description: {
    fontFamily: getPrimaryFont(fontTypes.MEDIUM),
    fontSize: 20,
    color: Colors.white,
    width: '80%',
    marginTop: 40,
  },
  Verses: {
    fontFamily: getPrimaryFont(fontTypes.MEDIUM),
    fontSize: 20,
    color: Colors.white,
    width: '80%',
    marginTop: 20,
  },
  Info: {
    width: '100%',
    height: '30%',
    backgroundColor: Colors.white,
    borderRadius: borderRadius,
    padding: containerPadding,
  },
  InfoHeading: {
    color: Colors.orange,
  },
  InfoSubheading: {
    lineHeight: 30,
    textAlign: 'left',
  },
});
