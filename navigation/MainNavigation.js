import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import PostContentScreen from '../screens/PostContentScreen';
import BottomTabNavigation from './BottomTabNavigation';
import PostDetailScreen from '../screens/PostDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessageBoxScreen from '../screens/MessageBoxScreen';
import SearchUserScreen from '../screens/SearchUserScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Main" component={BottomTabNavigation} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: true,
            headerBackTitle: 'Back',
            headerTitle: 'Post Detail',
          }}
        />
        <Stack.Screen
          name="PostContent"
          component={PostContentScreen}
          options={{...TransitionPresets.BottomSheetAndroid}}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="MessageBox" component={MessageBoxScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="SearchUserScreen" component={SearchUserScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigation;
