import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils/colors';

const AuthHeader = ({greet, subGreet}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greet}>{greet}</Text>
      <Text style={styles.subGreet}>{subGreet}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
  },
  greet: {
    fontSize: 25,
    color: colors.eelightgray,
    fontWeight: 'bold',
  },
  subGreet: {
    fontSize: 17,
    color: colors.elightgray,
  },
});
export default AuthHeader;
