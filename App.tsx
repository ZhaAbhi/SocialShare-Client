import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './navigation/AuthNavigation';
import AnimatedHeader from './screens/AnimatedHeader';

const App = () => {
  return (
    <NavigationContainer>
      {/* <UnAuthNavigation /> */}
      <AuthNavigation />
    </NavigationContainer>
    // <AnimatedHeader />
  );
};

export default App;
