import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {colors} from '../utils/colors';

const PostCardIcon = ({iconName, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={20} color={color} />
    </TouchableOpacity>
  );
};
export default PostCardIcon;
