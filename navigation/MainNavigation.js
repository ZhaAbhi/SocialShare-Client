import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const MainNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Drawer" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
};

export default MainNavigation;
