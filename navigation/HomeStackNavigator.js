import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AppHeader from '../components/AppHeader';
import PostContentScreen from '../screens/PostContentScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="PostContentScreen"
        component={PostContentScreen}
        options={{...TransitionPresets.ModalPresentationIOS}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
