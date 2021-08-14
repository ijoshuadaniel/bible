import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/constants/colors';
import {containerPadding} from '../../../utils/constants/globalstyles';

export const styles = StyleSheet.create({
  Login: {
    position: 'absolute',
    backgroundColor: Colors.black,
    opacity: 0.8,
    width: '100%',
    height: '100%',
  },
  LoginContainer: {
    position: 'absolute',
    backgroundColor: Colors.purssianBlue,
    width: '100%',
    height: '20%',
    right: 0,
    bottom: 0,
    padding: containerPadding,
  },
  LoginHeader: {
    color: Colors.white,
  },
});
