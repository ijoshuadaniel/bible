import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {headingStyles} from '../../../utils/constants/globalstyles';

import {styles} from './styles';

const LoginContainer = () => {
  return (
    <>
      <View style={styles.Login}></View>
      <View style={styles.LoginContainer}>
        <Text style={{...headingStyles, ...styles.LoginHeader}}>Login</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}></ScrollView>
      </View>
    </>
  );
};

export default LoginContainer;
