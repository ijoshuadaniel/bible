import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

const TouchableIcon = ({uri, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={{height: 32, width: 32}} source={{uri: uri}} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
