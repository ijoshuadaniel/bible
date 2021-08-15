import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingScreens from './src/pages/landingScreens';
import {pathConstant} from './utils/constants/pathConstant';
import CreateAccount from './src/pages/createAccount';
import HomePage from './src/pages/homePage';
import {Colors} from './utils/constants/colors';

const Stack = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={pathConstant.HOME_PAGE}
          component={HomePage}
          options={{
            headerMode: 'none',
          }}
        />
        <Stack.Screen
          name={pathConstant.LANDING}
          component={LandingScreens}
          options={{
            headerMode: 'none',
          }}
        />
        <Stack.Screen
          name={pathConstant.CREATE_ACCOUNT}
          component={CreateAccount}
          options={{
            headerMode: 'none',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
