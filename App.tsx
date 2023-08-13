import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './navigation/AuthNavigation';
import AuthContext from './context/AuthContent';
import UnAuthNavigation from './navigation/UnAuthNavigation';

const App = () => {
  const [user, setUser] = useState();

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{user, setUser}}>
        {user ? <AuthNavigation /> : <UnAuthNavigation />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
