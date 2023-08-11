import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppHeader from '../components/AppHeader';
import PostButton from '../components/PostButton';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppHeader />
      {/* Flatlist of posts */}

      <PostButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
