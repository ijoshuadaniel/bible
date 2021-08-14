import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../utils/constants/colors';
import {styles} from './styles';

const CustomButton = props => {
  const {title, textColor, backgroundColor, handleOnClick} = props;
  return (
    <TouchableOpacity onPress={handleOnClick}>
      <View style={{...styles.CustomButton, backgroundColor: backgroundColor}}>
        <Text style={{...styles.ButtonStyles, color: textColor}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
