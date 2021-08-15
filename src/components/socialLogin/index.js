import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const SocialLogin = ({uri, buttonText, navigation, path}) => {
  return (
    <TouchableOpacity onPress={() => navigation.push(path)}>
      <View style={styles.SocialLogin}>
        {uri && <Image style={{height: 32, width: 32}} source={{uri: uri}} />}
        <Text style={styles.SocialLoginText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialLogin;
