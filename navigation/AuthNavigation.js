import {createDrawerNavigator} from '@react-navigation/drawer';
import MainNavigation from './MainNavigation';

const Drawer = createDrawerNavigator();

const AuthNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Drawer" component={MainNavigation} />
    </Drawer.Navigator>
  );
};

export default AuthNavigation;
