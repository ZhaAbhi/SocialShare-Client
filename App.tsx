import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthenticationNavigator from './navigation/UnAuthenticationNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <UnAuthenticationNavigator />
    </NavigationContainer>
  );
};

export default App;
