import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../utils/colors';
import UnAuthHeader from '../components/UnAuthHeader';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <UnAuthHeader
            greet="Welcome Back!"
            subgreet="We are happy to see you again."
            info="Sign In"
          />
          <View style={styles.inputContainer}>
            <AppTextInput placeholder="Email" />
            <AppTextInput placeholder="Password" />
            <AppButton title="Sign In" style={styles.button} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.footer}>
        <View style={styles.createAccount}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.footerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  inputContainer: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: '10%',
    width: '80%',
    alignSelf: 'center',
  },
  footer: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccount: {
    flexDirection: 'row',
  },
  footerText: {
    color: colors.eelightgray,
    marginLeft: 5,
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
  },
});

export default LoginScreen;
