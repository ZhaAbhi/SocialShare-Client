import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthNavigation from './navigation/UnAuthNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <UnAuthNavigation />
    </NavigationContainer>
  );
};

export default App;
