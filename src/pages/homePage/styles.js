import {StyleSheet} from 'react-native';
import {Colors} from 'constants/colors';
import {containerPadding} from 'constants/globalstyles';

export const styles = StyleSheet.create({
  HomePage: {
    backgroundColor: Colors.lightWhite,
    padding: containerPadding,
    width: '100%',
    height: '82%',
  },
  HomePage_bottomBar: {
    flexDirection: 'row',
    padding: 30,
    backgroundColor: Colors.orange,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
