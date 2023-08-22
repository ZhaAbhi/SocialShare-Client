import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { colors } from '../utils/colors';
import FriendLists from '../components/FriendLists';

const FriendSuggestionScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding:20}}>
        <Text style={{fontSize:20, color:colors.black}}>Friends Suggestions</Text>
        <View style={{marginTop:20}}>
          {/* Lists of all users */}
          <FriendLists/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FriendSuggestionScreen;
