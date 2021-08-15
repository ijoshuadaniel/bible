import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomFooter from 'components/footer';
import CustomHeader from 'components/header/';

import {styles} from './styles';

const HomePage = () => {
  return (
    <>
      <CustomHeader />
      <ScrollView style={styles.HomePage}>
        <View style={styles.HomePage_Content}>
          <Text style={{marginBottom: 20}}> Hello Daniel! </Text>
        </View>
      </ScrollView>
      <CustomFooter />
    </>
  );
};

export default HomePage;
