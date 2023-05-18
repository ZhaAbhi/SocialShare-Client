import React,{useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const AppTextInput = ({placeholder, style, ...otherProps}) => {
    const[focused, setFocused] = useState(false)
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.textInput, style, focused && {borderWidth: 2, borderColor: 'darkblue'}]}
      onFocus={()=>setFocused(true)}
      onBlur={()=>setFocused(false)}
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
