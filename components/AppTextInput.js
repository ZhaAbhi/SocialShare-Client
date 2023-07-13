import React from 'react';
import {TextInput, View} from 'react-native';

const AppTextInput = ({placeholder}) => {
  return (
    <View>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default AppTextInput;
