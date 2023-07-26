import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import PostContentHeader from '../components/PostContentHeader';

const PostContentScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inner}>
        <PostContentHeader />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
export default PostContentScreen;
