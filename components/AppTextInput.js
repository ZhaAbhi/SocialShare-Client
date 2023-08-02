import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

const AppTextInput = ({placeholder, ...otherProps}) => {
  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.eelightgray}
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    marginVertical: 10,
  },
  input: {
    color: colors.eelightgray,
    height: 40,
    borderRadius: 25,
    paddingLeft: 15,
    padding: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.elightgray,
  },
});
export default AppTextInput;
