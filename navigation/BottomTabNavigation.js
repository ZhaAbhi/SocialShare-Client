import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/Entypo';
import FriendIcon from 'react-native-vector-icons/FontAwesome5';
import NotificationIcon from 'react-native-vector-icons/FontAwesome';
import MessageIcon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../utils/colors';
import FriendSuggestionScreen from '../screens/FriendSuggestionScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MessageScreen from '../screens/MessageScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const iconFocusColor = focused => {
    return focused ? colors.black : colors.darkgray;
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors.lightgray,
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({size, focused}) => (
            <HomeIcon name="home" size={size} color={iconFocusColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="FriendSuggest"
        component={FriendSuggestionScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <FriendIcon
              name="user-friends"
              size={size}
              color={iconFocusColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <NotificationIcon
              name="bell"
              size={size}
              color={iconFocusColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <MessageIcon
              name="envelope"
              size={size}
              color={iconFocusColor(focused)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
