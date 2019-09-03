import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] =  useState('Welcome to React Native!');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{outputText}</Text>
      <Button style = {styles.button} title = "Change Text"  onPress = {()=>setOutputText('The new text')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'red'
  }
});
