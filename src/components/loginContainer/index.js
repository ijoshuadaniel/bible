import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {headingStyles} from '../../../utils/constants/globalstyles';
import {
  googleIcon,
  facebookIcon,
  twitterIcon,
  mailIcon,
  closeIconWhite,
} from '../../../utils/constants/icons';
import TouchableIcon from '../../ui/touchableIcon';
import SocialLogin from '../socialLogin';

import {styles} from './styles';

const LoginContainer = ({showLogin, setShowLogin}) => {
  return (
    <>
      <View style={styles.Login}></View>
      <View style={styles.LoginContainer}>
        <View style={styles.LoginContainer_Flex}>
          <Text style={{...headingStyles, ...styles.LoginHeader}}>Login</Text>
          <TouchableIcon
            uri={closeIconWhite}
            onPress={() => setShowLogin(!showLogin)}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SocialLogin buttonText="Login with Google" uri={googleIcon} />
          <SocialLogin buttonText="Login with Facebook" uri={facebookIcon} />
          <SocialLogin buttonText="Login with Twitter" uri={twitterIcon} />
          <SocialLogin buttonText="Login with Email" uri={mailIcon} />
          <SocialLogin buttonText="or Create an Account" />
        </ScrollView>
      </View>
    </>
  );
};

export default LoginContainer;
