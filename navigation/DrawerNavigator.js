import {createDrawerNavigator} from '@react-navigation/drawer';
import AuthenticationNavigator from './AuthenticationNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Drawer" component={AuthenticationNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
