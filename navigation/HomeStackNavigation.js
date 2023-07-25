import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {colors} from '../utils/colors';

const Stack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.white},
      }}>
      <Stack.Screen name="Feed" component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default HomeStackNavigation;
