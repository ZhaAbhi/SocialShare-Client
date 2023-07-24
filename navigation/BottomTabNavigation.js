import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './HomeStackNavigation';
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from 'react-native-vector-icons/EvilIcons';
import NotificationIcon from 'react-native-vector-icons/Ionicons';
import FriendsIcon from 'react-native-vector-icons/Feather';
import MessageIcon from 'react-native-vector-icons/Entypo';
import {colors} from '../utils/colors';
import SearchScreen from '../screens/SearchScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MessagesScreen from '../screens/MessagesScreen';
import FriendsScreen from '../screens/FriendsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <HomeIcon
              name="home"
              size={size}
              color={focused ? colors.black : colors.darkgray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <FriendsIcon
              name="users"
              size={20}
              color={focused ? colors.black : colors.darkgray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <SearchIcon
              name="search"
              size={size}
              color={focused ? colors.black : colors.darkgray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <NotificationIcon
              name="notifications"
              size={20}
              color={focused ? colors.black : colors.darkgray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({size, focused}) => (
            <MessageIcon
              name="message"
              size={size}
              color={focused ? colors.black : colors.darkgray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
