import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthenticatedNavigator from './navigation/UnAuthenticatedNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <UnAuthenticatedNavigator />
    </NavigationContainer>
  );
};

export default App;
