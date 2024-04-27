import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';

// import components
// import Navigation from './screens/Nav/navigation';
import NavContainers from './screens/Nav/NavContainers';


// const CLERK_PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY;
const tokenCache = {
  async getToken(key) {
    try{
      return SecureStore.getItemAsync(key);
    }catch (err) {
      return null; 
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  }
}


const App = () => {
  return (
    <ClerkProvider 
      publishableKey='pk_test_aHVnZS1za3lsYXJrLTMxLmNsZXJrLmFjY291bnRzLmRldiQ'
      tokenCache={tokenCache}
    >
      
      <NavContainers/>
    </ClerkProvider>
  );
};

export default App;
