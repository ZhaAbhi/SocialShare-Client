import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthNavigation from './navigation/UnAuthNavigation';
import HomeScreen from './screens/HomeScreen';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
