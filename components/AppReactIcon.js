import React from 'react';
import {TouchableOpacity} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const AppReactIcon = ({onPress, name, color}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.4}>
      <EvilIcon name={name} size={20} color={color} />
    </TouchableOpacity>
  );
};
export default AppReactIcon;
