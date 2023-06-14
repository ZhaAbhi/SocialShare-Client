import React from 'react';
import {View, Text, TextInput} from 'react-native';

const AppTextInput = ({placeholder, error, ...props}) => {
  return (
    <View>
      <TextInput
        {...props}
        placeholder={placeholder}
        placeholderTextColor="darkgrey"
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: error ? 'red' : '#000',
          marginBottom: 20,
          padding: 10,
          borderRadius: 25,
        }}
      />
      {error !== '' && (
        <Text
          style={{
            marginTop: -15,
            marginBottom: 4,
            color: 'red',
            marginLeft: 10,
          }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default AppTextInput;
