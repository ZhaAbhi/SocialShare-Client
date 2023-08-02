import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthNavigation from './navigation/UnAuthNavigation';
import AuthContext from './context/AuthContext';
import AuthNavigation from './navigation/AuthNavigation';

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{isLoggedin, setIsLoggedin}}>
        {isLoggedin ? <AuthNavigation /> : <UnAuthNavigation />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default App;
