import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Page Stack
import LandingPage from '../LandingPage';
import SignInScreen from '../EarlyAuth/SignAuth';
import LogInScreen from '../EarlyAuth/LoginAuth';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
