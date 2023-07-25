import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <UnAuthNavigation /> */}
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
