import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthNavigation from './navigation/UnAuthNavigation';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    // <NavigationContainer>
    //   <UnAuthNavigation />
    // </NavigationContainer>
    <HomeScreen />
  );
};

export default App;
