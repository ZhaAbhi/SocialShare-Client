import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import AuthNavigation from './navigation/AuthNavigation';
import UnAuthNavigation from './navigation/UnAuthNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <UnAuthNavigation />
      {/* <AuthNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
