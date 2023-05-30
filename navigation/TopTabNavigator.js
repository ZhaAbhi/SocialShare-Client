import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feed from '../components/Feed';
import AIChat from '../components/AIChat';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Feed" component={Feed} />
      <TopTab.Screen name="AI Chat" component={AIChat} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
