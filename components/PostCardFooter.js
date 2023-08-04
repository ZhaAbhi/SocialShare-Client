import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/FontAwesome';
import RetweetIcon from 'react-native-vector-icons/AntDesign';
import ShareIcon from 'react-native-vector-icons/AntDesign';
import {colors} from '../utils/colors';

const PostCardFooter = ({
  onCommentPress,
  onRepostPress,
  onLikePress,
  onSharePress,
}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity hitSlop={15} onPress={onCommentPress}>
        <CommentIcon name="comment-o" size={16} color={colors.darkgray} />
      </TouchableOpacity>
      <TouchableOpacity hitSlop={15} onPress={onRepostPress}>
        <RetweetIcon name="retweet" size={16} color={colors.darkgray} />
      </TouchableOpacity>
      <TouchableOpacity hitSlop={15} onPress={onLikePress}>
        <LikeIcon name="hearto" size={16} color={colors.darkgray} />
      </TouchableOpacity>

      <TouchableOpacity hitSlop={15} onPress={onSharePress}>
        <ShareIcon name="sharealt" size={16} color={colors.darkgray} />
      </TouchableOpacity>
    </View>
  );
};
export default PostCardFooter;
