import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

const HomePage = () => {
  return (
    <View style={styles.HomePage}>
      <View>
        <Text>homePage</Text>
      </View>
      <View style={styles.HomePage_bottomBar}>
        <Text>Home</Text>
        <Text>Home</Text>
      </View>
    </View>
  );
};

export default HomePage;
