import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FeedScreen from '../screens/FeedScreen';
import FollowingFeedScreen from '../screens/FollowingFeedScreen';
import {colors} from '../config/colors';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'grey',
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <TopTab.Screen name="Feed" component={FeedScreen} />
      <TopTab.Screen name="Following" component={FollowingFeedScreen} />
    </TopTab.Navigator>
  );
};
export default TopTabNavigator;
