import { AntDesign, EvilIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import ProfilePicture from '../components/ProfilePicture';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';



export default function NewTweetScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const [tweet, setTweet] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const onPostTweet = () => {
    console.log(`Posting the tweet: ${tweet}
    Image: ${imageUrl}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name="close" size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture image={'https://www.whatsappimages.in/wp-content/uploads/2020/06/Whatsapp-DP-Images-8-300x300.jpg'} />
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweet}
            onChangeText={setTweet}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder={"What's happening?"}
          />
          <TextInput
            value={imageUrl}
            onChangeText={setImageUrl}
            style={styles.imageInput}
            placeholder={"Image url (optional)"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: "white",
    padding: 15
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  newTweetContainer: {
    flexDirection: "row",
  },
  inputsContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    maxHeight: 300,
    fontSize: 20
  },
  imageInput: {

  },
});
