import {StyleSheet} from 'react-native';
import {Colors} from 'constants/colors';
import {containerPadding} from 'constants/globalstyles';

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
    height: '50%',
    right: 0,
    bottom: 0,
    padding: containerPadding,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 50,
  },
  LoginContainer_Flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LoginHeader: {
    color: Colors.white,
  },
  GoogleIcon: {
    width: '10%',
    height: '10%',
  },
});
