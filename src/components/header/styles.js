import {StyleSheet} from 'react-native';
import {Colors} from 'constants/colors';
import {getPrimaryFont, fontTypes} from 'constants/fonts';

export const styles = StyleSheet.create({
  CustomHeader: {
    width: '100%',
    height: '10%',
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  Tab: {
    fontFamily: getPrimaryFont(fontTypes.BOLD),
    fontSize: 20,
  },
  Profile: {
    fontFamily: getPrimaryFont(fontTypes.BOLD),
    fontSize: 20,
    borderWidth: 2,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
});
