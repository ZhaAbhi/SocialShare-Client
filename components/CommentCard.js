import React from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LoadingImage from '../assets/images/loadingImage.jpeg';
import LikeIcon from 'react-native-vector-icons/Entypo';
import SendIcon from 'react-native-vector-icons/FontAwesome';

const CommentCard = ({comment}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 5, marginBottom: 15}}>
        <Text
          style={{
            fontFamily: 'Poppins-semibold',
            fontSize: 17,
            textDecorationLine: 'underline',
          }}>
          Comments
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={LoadingImage}
            style={{height: 40, width: 40, borderRadius: 20}}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: 'lightgrey',
              padding: 10,
              borderRadius: 20,
              margin: 10,
            }}>
            <Text style={{fontFamily: 'Poppins-semibold'}}>
              {comment.userId.username}
            </Text>
            <Text style={{fontFamily: 'Poppins-Light'}}>{comment.comment}</Text>
          </View>
          <LikeIcon
            name="thumbs-up"
            size={25}
            onPress={() => console.log('liked')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommentCard;
