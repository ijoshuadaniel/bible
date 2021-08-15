import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/constants/colors';

export const styles = StyleSheet.create({
  HomePage: {
    flex: 2,
    justifyContent: 'space-between',
  },
  HomePage_bottomBar: {
    flexDirection: 'row',
    padding: 30,
    backgroundColor: Colors.orange,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
