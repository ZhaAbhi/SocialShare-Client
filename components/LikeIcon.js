import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import HeartIcon from 'react-native-vector-icons/Ionicons';

const LikeIcon = ({onPress, name, color, count, countColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <HeartIcon name={name} color={color} size={17} />
      <Text style={{marginLeft: 3, fontSize: 11, color: countColor}}>
        {count}
      </Text>
    </TouchableOpacity>
  );
};

export default LikeIcon;
