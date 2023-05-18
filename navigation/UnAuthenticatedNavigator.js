import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const UnAuthenticatedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      animation: 'slide_from_right',
      headerShown: false,
      contentStyle: {backgroundColor: '#fff'},
    }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default UnAuthenticatedNavigator;
