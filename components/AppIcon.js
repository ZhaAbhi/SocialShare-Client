import React from 'react';
import {TouchableOpacity} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const AppIcon = ({iconName}) => {
  return (
    <TouchableOpacity>
      <EvilIcon name={iconName} size={20} color="grey" />
    </TouchableOpacity>
  );
};

export default AppIcon;
