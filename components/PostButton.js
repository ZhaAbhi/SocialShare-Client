import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const PostButton = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue',
        position: 'absolute',
        right: 15,
        bottom: 15,
        opacity: 0.8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>+</Text>
    </TouchableOpacity>
  );
};

export default PostButton;
