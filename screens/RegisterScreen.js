import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    if (password !== confirmPassword) {
      setLoading(false);
      return Alert.alert('Password didnot matched!');
    }
    const body = {
      username,
      email,
      password,
    };
    try {
      await axios({
        url: 'http://192.168.1.71:8000/register',
        method: 'post',
        data: body,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => {
        setLoading(false);
        if (res.status === 201) {
          Alert.alert('Registered Successfully', 'Please login to continue', [
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ]);
        }
      });
    } catch (error) {
      console.log(error.response.data);
      setLoading(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="position">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView>
            <View style={styles.headlineContainer}>
              <Text style={styles.loginText}>Create Account</Text>
              <View style={{marginTop: '5%'}}>
                <Text style={[styles.welcomeText, {textAlign: 'center'}]}>
                  Create account so you can
                </Text>
                <Text style={[styles.welcomeText]}>
                  explore, share and chat with friends!
                </Text>
              </View>
            </View>
            <View style={{padding: 20, marginTop: 30}}>
              <AppTextInput
                placeholder="Username"
                style={{marginBottom: 26}}
                onChangeText={username => setUsername(username)}
              />
              <AppTextInput
                placeholder="Email"
                style={{marginBottom: 26}}
                onChangeText={email => setEmail(email)}
              />
              <AppTextInput
                placeholder="Password"
                style={{marginBottom: 26}}
                onChangeText={password => setPassword(password)}
              />
              <AppTextInput
                placeholder="Confirm Password"
                onChangeText={confirmPassword =>
                  setConfirmPassword(confirmPassword)
                }
              />
              <AppButton
                title={loading ? 'Loading' : 'Register'}
                containerStyle={{marginTop: 28}}
                onPress={handleRegister}
              />
              <View style={styles.createAccount}>
                <Text
                  style={styles.alreadyAccountText}
                  onPress={() => navigation.navigate('Login')}>
                  Already have an account?
                </Text>
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headlineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  loginText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'darkblue',
    fontSize: 28,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 17,
  },
  textInput: {
    height: 40,
    backgroundColor: '#f1f4ff',
    borderRadius: 8,
    paddingLeft: 10,
  },
  createAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  continueText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'darkblue',
  },
  createAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  alreadyAccountText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  githubLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 10,
    borderRadius: 5,
  },
  githublogo: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  githubText: {
    color: '#000',
    fontWeight: 'bold',
    marginRight: 4,
  },
});
export default RegisterScreen;
