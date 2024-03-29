import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const AppReactIcon = ({onPress, name, color, count}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <EvilIcon name={name} size={20} color={color} />
      <Text style={{marginLeft: 3, fontSize: 11}}>{count}</Text>
    </TouchableOpacity>
  );
};
export default AppReactIcon;
