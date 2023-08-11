import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthNavigation from './navigation/UnAuthNavigation';
import HomeScreen from './screens/HomeScreen';
import BottomTabNavigation from './navigation/BottomTabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default App;
