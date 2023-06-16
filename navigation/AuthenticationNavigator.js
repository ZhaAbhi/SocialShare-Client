import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const AuthenticationNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
    </Tab.Navigator>
  );
};

export default AuthenticationNavigator;
