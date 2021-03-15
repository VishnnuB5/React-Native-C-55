import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          marginLeft: 10,
          borderWidth: 1,
          borderColor: 'red',
          justifyContent: 'center',
          width: 200,
          height: 200,
          borderRadius: 100,
          alignSelf: 'center',
        }}
        onPress={this.playSound}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            alignSelf: 'center',
          }}>
          SoundButton
        </Text>
      </TouchableOpacity>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <Text style={{ alignSelf: 'center', marginBottom: 100 }}>
          My First React component
        </Text>
        <SoundButton />
      </View>
    );
  }
}
