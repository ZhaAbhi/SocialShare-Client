import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeSreen';
import PostContentScreen from '../screens/PostContentScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import CommentModalScreen from '../screens/CommenModalScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: '#fff',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="PostContent"
        component={PostContentScreen}
        options={{...TransitionPresets.ModalSlideFromBottomIOS}}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{
          headerShown: true,
          headerTitle: 'Post',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="CommentModal"
        component={CommentModalScreen}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
