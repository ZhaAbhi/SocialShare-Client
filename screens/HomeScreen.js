import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppHeader from '../components/AppHeader';
import PostButton from '../components/PostButton';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppHeader onPressAvatar={() => navigation.openDrawer()} />
      {/* Flatlist of posts */}

      <PostButton onPress={() => navigation.navigate('PostContent')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
