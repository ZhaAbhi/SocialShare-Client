import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const UnAuthenticationNavigator = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{cardStyle: {backgroundColor: '#fff'}}}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default UnAuthenticationNavigator;
