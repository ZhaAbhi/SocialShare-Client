import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthenticatedNavigator from './navigation/UnAuthenticatedNavigator';
import AuthenticatedNavigator from './navigation/AuthenticatedNavigator';
import AuthContext from './context/AuthContext';
import TopTabNavigator from './navigation/TopTabNavigator';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

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
      <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
        {loggedIn ? <AuthenticatedNavigator /> : <UnAuthenticatedNavigator />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
