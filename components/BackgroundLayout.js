import React from 'react';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundLayout = ({children}) => {
  return (
    <LinearGradient
      colors={['#b7e4c7', '#52b788', '#40916c']}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </LinearGradient>
  );
};
export default BackgroundLayout;
