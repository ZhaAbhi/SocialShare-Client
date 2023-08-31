import React from 'react';
import {SafeAreaView, Text, View, TextInput, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';

const MessageScreen = () => {
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <TextInput
          placeholder="Search Direct Messages"
          placeholderTextColor={colors.darkgray}
          style={{
            height: 30,
            borderRadius: 25,
            paddingLeft: 10,
            backgroundColor: colors.elightgray,
          }}
        />
      </View>
      <View style={{borderWidth: 0.5, borderColor: colors.lightgray}}></View>
      <View style={{flex:1}}>

      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
