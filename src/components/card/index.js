import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from 'utils/constants/colors';
import {styles} from './styles';

const CustomCard = () => {
  return (
    <View style={{...styles.CustomCard, backgroundColor: Colors.honeyYellow}}>
      <Text style={{marginBottom: 10}}>
        So do not fear, for I am with you; do not be dismayed, for I am your
        God. I will strengthen you and help you; I will uphold you with my
        righteous right hand.
      </Text>
      <Text>- Isaiah 41:10</Text>
    </View>
  );
};

export default CustomCard;
