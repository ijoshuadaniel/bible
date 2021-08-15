import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {
  headingStyles,
  subheadingStyles,
} from '../../../utils/constants/globalstyles';
import CustomButton from '../../components/customButton';
import TouchableIcon from '../../ui/touchableIcon';
import {closeIconBlack} from '../../../utils/constants/icons';
import {pathConstant} from '../../../utils/constants/pathConstant';
import textConstants from '../../../utils/constants/textConstant';
import {Colors} from '../../../utils/constants/colors';

import {styles} from './styles';
import LoginInput from '../../ui/loginInput';

const CreateAccount = ({navigation}) => {
  return (
    <View style={styles.CreateAccount}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.CreateAccount_flex}>
        <View>
          <View style={styles.CreateAccount_headFlex}>
            <Text style={{...headingStyles}}>
              {textConstants.CREATE_ACCOUNT}
            </Text>
            <TouchableIcon
              uri={closeIconBlack}
              onPress={() => {
                navigation.push(pathConstant.LANDING);
              }}
            />
          </View>
          <Text
            style={{...subheadingStyles, ...styles.CreateAccount_Subheading}}>
            {textConstants.CREATE_ACCOUNT_DESC}
          </Text>
          <ScrollView>
            <LoginInput
              label="Full Name"
              placeholder="Enter your name"
              placeholderColor={Colors.black}
              type="default"
              style={styles.CreateAccount_input}
            />
            <LoginInput
              label="Email Address"
              placeholder="Enter your email address"
              placeholderColor={Colors.black}
              type="email-address"
              style={styles.CreateAccount_input}
            />
            <LoginInput
              label="Phone Number"
              placeholder="Enter your phone number"
              placeholderColor={Colors.black}
              type="number-pad"
              style={styles.CreateAccount_input}
            />
            <LoginInput
              label="Password"
              placeholder="Enter your password"
              placeholderColor={Colors.black}
              password
              style={styles.CreateAccount_input}
            />
            <LoginInput
              label="Confirm Password"
              placeholder="Confirm your password"
              placeholderColor={Colors.black}
              password
              style={styles.CreateAccount_input}
            />
          </ScrollView>
        </View>
        <View>
          <CustomButton
            title="Create Account"
            textColor={Colors.white}
            backgroundColor="orange"
            handleOnClick={() => {}}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CreateAccount;
