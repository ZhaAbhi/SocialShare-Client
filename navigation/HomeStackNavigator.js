import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeSreen';
import TopTabNavigator from './TopTabNavigator';
import PostContentScreen from '../screens/PostContentScreen';

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
  </Stack.Navigator>
);

export default HomeStackNavigator;
