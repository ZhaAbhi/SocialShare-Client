import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyPostsScreen from '../screens/MyPostScreen';
import MyLikesScreen from '../screens/MyLikesScreen';
import MyRepliesScreen from '../screens/MyRepliesScreen';

const TopTab = createMaterialTopTabNavigator();

const ProfileTopTabNavigation = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Posts" component={MyPostsScreen} />
      <TopTab.Screen name="Likes" component={MyLikesScreen} />
      <TopTab.Screen name="Replies" component={MyRepliesScreen} />
    </TopTab.Navigator>
  );
};

export default ProfileTopTabNavigation;
