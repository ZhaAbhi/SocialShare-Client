import React from 'react';
import {View, Text, TextInput} from 'react-native';

const AppTextInput = ({placeholder, ...props}) => {
  return (
    <TextInput
      {...props}
      placeholder={placeholder}
      style={{
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 20,
        padding: 10,
        borderRadius: 25,
      }}
    />
  );
};

export default AppTextInput;
