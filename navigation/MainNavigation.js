import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import PostContentScreen from '../screens/PostContentScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Main" component={BottomTabNavigation} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="PostContent"
          component={PostContentScreen}
          options={{presentation: 'containedModal'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigation;
