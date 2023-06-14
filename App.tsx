import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigator from './navigation/AuthenticationNavigator';
import AuthContext from './context/AuthContext';
import UnAuthenticatedHeader from './components/UnAuthenticatedHeader';
import UnAuthenticationNavigator from './navigation/UnAuthenticationNavigator';

const App = () => {
  const [loggedIn, setLoggedIn] = useState();
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
        {loggedIn ? <AuthenticationNavigator /> : <UnAuthenticationNavigator />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
