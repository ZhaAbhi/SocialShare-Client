import {createDrawerNavigator} from '@react-navigation/drawer';
import MainNavigation from './MainNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Profile" component={MainNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
