import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import PostContentScreen from '../screens/PostContentScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

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
          options={{...TransitionPresets.BottomSheetAndroid}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigation;
