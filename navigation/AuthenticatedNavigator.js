import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import Icon from 'react-native-vector-icons/AntDesign';
import {Platform} from 'react-native';
const Tab = createBottomTabNavigator();

const AuthenticatedNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="HomeTab"
      component={HomeStackNavigator}
      options={{
        tabBarHideOnKeyboard: Platform.OS === 'android' ? true : false,
        tabBarLabel: 'Home',
        tabBarIcon: ({size, color}) => (
          <Icon name="home" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AuthenticatedNavigator;
