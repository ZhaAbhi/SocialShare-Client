import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthNavigation from './navigation/UnAuthNavigation';
import AuthContext from './context/AuthContext';
import AuthNavigation from './navigation/AuthNavigation';
import UserContext from './context/UserContext';

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState();
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{isLoggedin, setIsLoggedin}}>
        <UserContext.Provider value={{user, setUser}}>
          {isLoggedin ? <AuthNavigation /> : <UnAuthNavigation />}
        </UserContext.Provider>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
