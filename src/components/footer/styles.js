import {StyleSheet} from 'react-native';
import {Colors} from 'constants/colors';

export const styles = StyleSheet.create({
  CustomFooter: {
    position: 'absolute',
    bottom: 0,
    height: '10%',
    width: '100%',
    backgroundColor: Colors.white,
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
  },
  CustomFooter_tabs: {
    alignItems: 'center',
  },
});
