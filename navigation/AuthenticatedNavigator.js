import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import Icon from 'react-native-vector-icons/AntDesign';
const Tab = createMaterialBottomTabNavigator();

const AuthenticatedNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeTab"
      component={HomeStackNavigator}
      options={{tabBarIcon: () => <Icon name="home" size={30} />}}
    />
  </Tab.Navigator>
);

export default AuthenticatedNavigator;
