import {createDrawerNavigator} from '@react-navigation/drawer';
import MainNavigation from './MainNavigation';

const Drawer = createDrawerNavigator();

const AuthNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Profile" component={MainNavigation} />
    </Drawer.Navigator>
  );
};

export default AuthNavigation;
