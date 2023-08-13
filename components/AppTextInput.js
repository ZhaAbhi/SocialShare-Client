import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colors} from '../utils/colors';

const AppTextInput = ({placeholder, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...otherProps}
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={colors.eelightgray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  textInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.eelightgray,
    color: colors.eelightgray,
  },
});

export default AppTextInput;
