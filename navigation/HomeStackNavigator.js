import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeSreen';
import TopTabNavigator from './TopTabNavigator';

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
  </Stack.Navigator>
);

export default HomeStackNavigator;
