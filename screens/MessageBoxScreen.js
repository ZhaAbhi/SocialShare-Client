import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {colors} from '../utils/colors';
import SendIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';
import DisplayMessage from '../components/DisplayMessage';
import io from 'socket.io-client';
import {api} from '../config/api';
import UserContext from '../context/UserContext';

var socket, selectedChatCompare;

const MessageBoxScreen = ({route, navigation}) => {
  const {user} = useContext(UserContext);
  const {allChat} = route.params;
  const chatId = allChat._id;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState();
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    socket = io(`${api.baseUrl}`);
    socket.emit('setup', user);
    socket.on('connection', () => setSocketConnected(true));
  }, []);

  const fetchMessages = async () => {
    const token = await retrieve();
    await axios({
      method: 'get',
      url: `${api.message}/${chatId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setMessages(res.data);
        socket.emit('join chat', chatId);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const sendMessage = async () => {
    const token = await retrieve();
    await axios({
      method: 'post',
      url: `${api.message}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        content: newMessage,
        chatId: chatId,
      },
    })
      .then(res => {
        setNewMessage('');
        socket.emit('new message', res.data);
        setMessages([...messages, res.data]);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = allChat;
  }, [chatId]);

  useEffect(() => {
    socket.on('message received', newMessageReceived => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        return;
      } else {
        setMessages([...messages, newMessageReceived]);
      }
    });
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'android' ? 30 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              padding: 5,
              marginLeft: 10,
              borderRadius: 25,
              backgroundColor: colors.black,
              alignSelf: 'flex-start',
            }}>
            <Text
              style={{
                color: colors.eelightgray,
                fontWeight: 'bold',
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              Back
            </Text>
          </TouchableOpacity>
          <View style={{flex: 1}}>
            {messages && (
              <FlatList
                data={messages}
                keyExtractor={item => item._id}
                renderItem={({item}) => <DisplayMessage item={item} />}
              />
            )}
          </View>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              value={newMessage}
              onChangeText={text => setNewMessage(text)}
              placeholder="Send message"
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: colors.elightgray,
                backgroundColor: colors.elightgray,
                flex: 1,
                borderRadius: 20,
                paddingLeft: 8,
              }}
            />
            <TouchableOpacity style={{marginLeft: 5}} onPress={sendMessage}>
              <SendIcon name="send" size={20} color={colors.blue} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default MessageBoxScreen;
