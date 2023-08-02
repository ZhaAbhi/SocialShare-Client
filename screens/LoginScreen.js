import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {colors} from '../utils/colors';
import UnAuthHeader from '../components/UnAuthHeader';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import axios from 'axios';
import {api} from '../config/api';
import {retrieveToken, storeToken} from '../utils/store';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const userData = {
      email: email.trim(),
      password,
    };
    try {
      await axios({
        method: 'post',
        url: api.login,
        data: userData,
      }).then(async res => {
        if (res.status === 201) {
          await storeToken(res.data.AccessToken);
          setLoading(false);
          return Alert.alert('User logged in successfully!');
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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
            <AppTextInput
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <AppTextInput
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <AppButton
              title="Sign In"
              style={styles.button}
              onPress={handleLogin}
              loading={loading}
            />
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
