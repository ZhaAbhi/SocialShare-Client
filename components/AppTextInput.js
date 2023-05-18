import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const AppTextInput = ({placeholder, style, ...otherProps}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.textInput, style]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    backgroundColor: '#f1f4ff',
    borderRadius: 8,
    paddingLeft: 10,
  },
});

export default AppTextInput;
