import React, {useEffect} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import axios from 'axios';

const CommentModalScreen = ({route}) => {
  const {postId} = route.params;
 
  

  const retrieveComments = async () => {
    try {
      if (!postId) {
        return Alert.alert('Could not fetch comments!');
      }
      await axios({
        url: `http://192.168.1.71:8000/post/commentlist/${postId}`,
        method: 'get',
      }).then(res => {
        console.log(res.data.commentsBy);
      });
    } catch (error) {
      Alert.alert('Could not fetch comments!');
    }
  };
  useEffect(() => {
    retrieveComments();
  }, [postId]);
  return (
    <View>
      {/* <FlatList
      data={comments}
      keyExtractor={(comment)=>comment._id}
     /> */}
    </View>
  );
};
export default CommentModalScreen;
