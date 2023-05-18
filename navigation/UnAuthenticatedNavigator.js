import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const UnAuthenticatedNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown:false, contentStyle:{backgroundColor:'#fff'}}}>
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default UnAuthenticatedNavigator;
