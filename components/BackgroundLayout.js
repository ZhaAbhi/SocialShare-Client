import React from 'react';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundLayout = ({children}) => {
  return (
    <LinearGradient
      colors={['#efe5dc', '#3fa34d', '#2a9134']}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </LinearGradient>
  );
};
export default BackgroundLayout;
