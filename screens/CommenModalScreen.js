import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import serverUrl from '../config/serverAccess';
import CommentCard from '../components/CommentCard';
import SendIcon from 'react-native-vector-icons/FontAwesome';

const CommentModalScreen = ({route}) => {
  const {postId} = route.params;
  const [comments, setComments] = useState();

  const retrieveComments = async () => {
    try {
      if (!postId) {
        return Alert.alert('Could not fetch comments!');
      }
      await axios({
        url: `${serverUrl}/post/commentlist/${postId}`,
        method: 'get',
      }).then(res => {
        setComments(res.data.commentsBy);
      });
    } catch (error) {
      Alert.alert('Could not fetch comments!');
    }
  };
  useEffect(() => {
    retrieveComments();
  }, [postId]);
  return (
    <SafeAreaView style={{flex: 1}}>
      {comments && (
        <FlatList
          data={comments}
          keyExtractor={item => item._id}
          renderItem={({item}) => <CommentCard comment={item} />}
        />
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 30 : 0}>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Write your comment"
            multiline={true}
            numberOfLines={2}
            style={{
              flex: 1,
              height: 40,
              backgroundColor: 'lightgrey',
              padding: 10,
              borderRadius: 20,
            }}
          />
          <View>
            <SendIcon name="send" size={25} style={{marginLeft: 5}} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default CommentModalScreen;
