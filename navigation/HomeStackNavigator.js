import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeSreen';
import PostContentScreen from '../screens/PostContentScreen';
import PostDetailScreen from '../screens/PostDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => (
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
      options={{animation: 'slide_from_bottom'}}
    />
    <Stack.Screen
      name="PostDetail"
      component={PostDetailScreen}
      options={{
        headerShown: true,
        headerTitle: 'See Post Detail',
        animation: 'slide_from_right',
      }}
    />
  </Stack.Navigator>
);

export default HomeStackNavigator;
