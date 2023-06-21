import React from 'react';
import {TouchableOpacity} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const AppIcon = ({iconName, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <EvilIcon name={iconName} size={20} color="grey" style={style} />
    </TouchableOpacity>
  );
};

export default AppIcon;
