import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomFooter from 'components/footer';
import CustomHeader from 'components/header/';
import {headingStyles} from 'constants/globalstyles';
import CustomCard from 'components/card';

import {styles} from './styles';

const HomePage = () => {
  return (
    <>
      <CustomHeader />
      <ScrollView style={styles.HomePage}>
        <View style={styles.HomePage_Content}>
          <Text style={{...headingStyles, marginBottom: 20}}>
            {' '}
            Hello Daniel!{' '}
          </Text>
        </View>
        <CustomCard />
        <CustomCard />
      </ScrollView>
      <CustomFooter />
    </>
  );
};

export default HomePage;
