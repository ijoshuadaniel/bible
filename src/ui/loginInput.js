import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {fontTypes, getPrimaryFont} from '../../utils/constants/fonts';

const LoginInput = ({
  type,
  label,
  placeholder,
  style,
  placeholderColor,
  password,
  error,
}) => {
  const getInputStyle = () => {
    if (error) {
      return {
        ...style,
        ...styles.Error,
      };
    } else {
      return {
        ...style,
      };
    }
  };

  return (
    <View style={styles.TextInput}>
      <Text style={styles.Text}>{label}</Text>
      <TextInput
        style={getInputStyle()}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        keyboardType={type}
        secureTextEntry={password ? true : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    marginTop: 5,
  },
  Text: {
    fontFamily: getPrimaryFont(fontTypes.MEDIUM),
  },
  Error: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default LoginInput;
