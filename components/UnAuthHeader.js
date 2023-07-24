import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

const UnAuthHeader = ({greet, subgreet, info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greet}>{greet}</Text>
      <Text style={styles.subGreet}>{subgreet}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>{info}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  greet: {
    color: colors.eelightgray,
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
  },
  subGreet: {
    color: colors.eelightgray,
    fontSize: 17,
    fontFamily: 'Poppins-Light',
  },
  infoContainer: {
    marginTop: 50,
  },
  info: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    color: colors.eelightgray,
  },
});

export default UnAuthHeader;
