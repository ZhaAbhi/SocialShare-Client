import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import UserContext from '../context/UserContext';
import {colors} from '../utils/colors';

const DisplayMessage = ({item}) => {
  const {user} = useContext(UserContext);
  return (
    <View>
      {item.sender._id === user._id && (
        <View
          style={{
            backgroundColor: colors.blue,
            padding: 10,
            borderRadius: 25,
            margin: 10,
            alignSelf: 'flex-end',
          }}>
          <Text style={{color: colors.eelightgray}}>{item.content}</Text>
        </View>
      )}
      {item.sender._id !== user._id && (
        <View
          style={{
            backgroundColor: colors.elightgray,
            padding: 10,
            borderRadius: 25,
            margin: 10,
            alignSelf: 'flex-start',
          }}>
          <Text style={{color: colors.black}}>{item.content}</Text>
        </View>
      )}
    </View>
  );
};

export default DisplayMessage;
