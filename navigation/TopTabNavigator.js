import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FeedScreen from '../screens/FeedScreen';
import FollowingFeedScreen from '../screens/FollowingFeedScreen';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Feed" component={FeedScreen} />
      <TopTab.Screen name="Following" component={FollowingFeedScreen} />
    </TopTab.Navigator>
  );
};
export default TopTabNavigator;
