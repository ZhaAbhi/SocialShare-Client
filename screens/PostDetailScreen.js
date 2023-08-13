import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import PostCard from '../components/PostCard';
import CommentCard from '../components/CommentCard';
import {colors} from '../utils/colors';

const PostDetailScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}>
      <View style={{flex: 1}}>
        <PostCard />
        <Text style={styles.comment}>All comments :</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{padding: 10}}>
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </ScrollView>
      </View>
      <View>
        <TextInput style={{height: 40, borderWidth: 1, borderColor: 'red'}} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  comment: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default PostDetailScreen;
