import React from 'react';
import { View } from 'react-native';
// import AllApp from './screens/Nav/navContainer';
import LandingPage from './screens/LandingPage';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LandingPage/>
    </View>

  );
};

export default App;
