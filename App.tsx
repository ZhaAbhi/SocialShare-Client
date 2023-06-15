import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationNavigator from './navigation/AuthenticationNavigator';
import AuthContext from './context/AuthContext';
import UnAuthenticatedHeader from './components/UnAuthenticatedHeader';
import UnAuthenticationNavigator from './navigation/UnAuthenticationNavigator';
import UserContext from './context/UserContext';

const App = () => {
  const [loggedIn, setLoggedIn] = useState();
  const [user, setUser] = useState();
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
        <UserContext.Provider value={{user, setUser}}>
          {loggedIn ? (
            <AuthenticationNavigator />
          ) : (
            <UnAuthenticationNavigator />
          )}
        </UserContext.Provider>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
