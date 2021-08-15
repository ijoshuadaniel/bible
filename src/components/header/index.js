import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';
const CustomHeader = () => {
  return (
    <View style={styles.CustomHeader}>
      <View>
        <Text style={styles.Tab}>Today</Text>
      </View>
      <View>
        <Text style={styles.Profile}>D</Text>
      </View>
    </View>
  );
};

export default CustomHeader;
