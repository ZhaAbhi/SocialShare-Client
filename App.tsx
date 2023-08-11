import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './navigation/AuthNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default App;
