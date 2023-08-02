import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../utils/colors';

const AppButton = ({style, title, loading, onPress}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[style, styles.button]}
      activeOpacity={0.8}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.elightgray} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.eelightgray,
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
  },
});
export default AppButton;
