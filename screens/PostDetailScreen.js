import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PostCard from '../components/PostCard';
import CommentCard from '../components/CommentCard';
import {colors} from '../utils/colors';
import SendIcon from 'react-native-vector-icons/MaterialIcons';

const PostDetailScreen = ({route}) => {
  const {postId} = route.params;
  console.log(postId);
  const [commentContent, setCommentContent] = useState('');
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}>
      <View style={{flex: 1}}>
        {/* Style header here */}
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
      <View style={styles.commentContainer}>
        <TextInput
          placeholder="Add your comment here"
          textAlignVertical="top"
          multiline
          value={commentContent}
          onChangeText={text => setCommentContent(text)}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={{marginLeft: 5}}
          disabled={commentContent.trim() === ''}>
          <SendIcon
            name="send"
            size={24}
            color={commentContent.trim() === '' ? colors.dimBlue : colors.blue}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  comment: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.black,
  },
  textInput: {
    padding: 10,
    backgroundColor: colors.elightgray,
    paddingLeft: 15,
    borderWidth: 0.3,
    borderColor: colors.darkgray,
    borderRadius: 20,
    flex: 1,
  },
  commentContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostDetailScreen;
