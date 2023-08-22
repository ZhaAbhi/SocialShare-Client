import {createDrawerNavigator} from '@react-navigation/drawer';
import MainNavigation from './MainNavigation';
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const AuthNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Profile" component={MainNavigation} />
    </Drawer.Navigator>
  );
};

export default AuthNavigation;
