import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {colors} from '../utils/colors';

const PostCardIcon = ({iconName}) => {
  return (
    <TouchableOpacity>
      <Icon name={iconName} size={20} color={colors.darkgray} />
    </TouchableOpacity>
  );
};
export default PostCardIcon;
