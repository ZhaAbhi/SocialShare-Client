import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyPostsScreen from '../screens/MyPostScreen';
import MyLikesScreen from '../screens/MyLikesScreen';
import MyRepliesScreen from '../screens/MyRepliesScreen';

const TopTab = createMaterialTopTabNavigator();

const ProfileTopTabNavigation = ({userId}) => {
  const postsComponent = React.useMemo(() => {
    return () => <MyPostsScreen userId={userId} />;
  }, [userId]);
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Posts" component={postsComponent} />
      <TopTab.Screen name="Likes" component={MyLikesScreen} />
      <TopTab.Screen name="Replies" component={MyRepliesScreen} />
    </TopTab.Navigator>
  );
};

export default ProfileTopTabNavigation;
