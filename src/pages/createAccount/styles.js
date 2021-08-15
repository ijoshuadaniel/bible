import {StyleSheet} from 'react-native';
import {Colors} from 'constants/colors';
import {fontTypes, getPrimaryFont} from 'constants/fonts';
import {containerPadding} from 'constants/globalstyles';

export const styles = StyleSheet.create({
  CreateAccount: {
    width: '100%',
    height: '100%',
    padding: containerPadding,
    paddingVertical: 50,
  },
  CreateAccount_flex: {
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'space-between',
  },
  CreateAccount_headFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CreateAccount_input: {
    borderWidth: 1,
    padding: 20,
    borderColor: Colors.black,
    color: Colors.black,
    marginVertical: 10,
    borderRadius: 10,
    fontFamily: getPrimaryFont(fontTypes.MEDIUM),
  },
  CreateAccount_Subheading: {
    width: '90%',
    marginBottom: 10,
  },
});
