import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import UnAuthHeader from '../components/UnAuthHeader';
import {colors} from '../utils/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const RegisterScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.inner} showsVerticalScrollIndicator={false}>
        <UnAuthHeader
          greet="Create Account!"
          subgreet="A platform to share and connect"
          info="Register"
        />

        <AppTextInput placeholder="Username" />
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Password" />
        <AppTextInput placeholder="Confirm Password" />
        <AppButton title="Register" style={styles.button} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  inner: {
    flex: 1,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: colors.eelightgray,
    marginLeft: 5,
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
  },
});

export default RegisterScreen;
