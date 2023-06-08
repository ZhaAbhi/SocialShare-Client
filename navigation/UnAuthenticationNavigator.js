import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const UnAuthenticationNavigator = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      cardStyle: {backgroundColor: '#fff'},
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default UnAuthenticationNavigator;
