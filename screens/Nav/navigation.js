import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


// Page Stack
import LandingPage from '../LandingPage';
import SignInScreen from '../EarlyAuth/SignAuth';
import LogInScreen from '../EarlyAuth/LoginAuth';
import PageAfterLogIn from '../EarlyAuth/pageAfterLogin';
import PageAfterSignIn from '../EarlyAuth/pageAfterSignIn';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false, // Default header visibility for all screens
      }}
    >
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="PageAfterLogIn" component={PageAfterLogIn} />
        <Stack.Screen name="PageAfterSignIn" component={PageAfterSignIn} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
