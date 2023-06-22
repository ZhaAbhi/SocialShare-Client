import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import PostContentScreen from '../screens/PostContentScreen';
import FeedDetailScreen from '../screens/FeedDetailScreen';
import AuthenticationNavigator from './AuthenticationNavigator';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen name="HomeScreen" component={AuthenticationNavigator} />
      <Stack.Screen
        name="PostContentScreen"
        component={PostContentScreen}
        options={{...TransitionPresets.ModalPresentationIOS}}
      />
      <Stack.Screen
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: true,
          headerTitle: 'Post Detail',
          headerBackTitleVisible: false,
        }}
        name="FeedDetailScreen"
        component={FeedDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
