import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './navigation/AuthNavigation';
import AuthContext from './context/AuthContext';
import UnAuthNavigation from './navigation/UnAuthNavigation';
import UserContext from './context/UserContext';

const App = () => {
  const [loggedIn, setLoggedIn] = useState();
  const [user, setUser] = useState();

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
        <UserContext.Provider value={{user, setUser}}>
          {loggedIn ? <AuthNavigation /> : <UnAuthNavigation />}
        </UserContext.Provider>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
