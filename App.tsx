import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthenticatedNavigator from './navigation/UnAuthenticatedNavigator';

const App = () => {
  const config = {
    screens: {
      Login: {
        path: 'login/:id',
        parse: {
          id: id => `${id}`,
        },
      },
      Register: {
        path: 'register',
      },
    },
  };

  const linking = {
    prefixes: ['socialshare://'],
    config,
  };

  return (
    <NavigationContainer linking={linking}>
      <UnAuthenticatedNavigator />
    </NavigationContainer>
  );
};

export default App;
