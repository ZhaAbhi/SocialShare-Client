import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import AppHeader from '../components/AppHeader';

const Tab = createBottomTabNavigator();

const AuthenticationNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerLeft: () => <AppHeader />}}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
    </Tab.Navigator>
  );
};

export default AuthenticationNavigator;
