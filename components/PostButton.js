import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const PostButton = () => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue',
        position: 'absolute',
        right: 15,
        bottom: 15,
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>+</Text>
    </TouchableOpacity>
  );
};

export default PostButton;
