import React, {useEffect} from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
// import * as SecureStore from 'expo-secure-store';

// import components
// import Navigation from './screens/Nav/navigation';
import NavContainers from './screens/Nav/NavContainers';


// // const CLERK_PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY;
// const tokenCache = {
//   async getToken(key) {
//     try{
//       return SecureStore.getItemAsync(key);
//     }catch (err) {
//       return null; 
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   }
// }

// const initialLayout = () => {
//   const {isLoaded, isSignedin} = useAuth(); 

//   useEffect (() => {
//     console.log('isSignedIn', isSignedin)
//   }, [isSignedin])

// }

const App = () => {
  return (
    
     
        <NavContainers/>
       
  )
};

export default App;
