import React from 'react';
import {  Text, View } from 'react-native';

// Expo loads App from App.js

export default function App() {
  
  return (
    <View style={{padding: 50, 
          flexDirection: 'row',  
          width: '80%', 
          height: 300, 
          justifyContent: 'space-around', 
          alignItems: 'stretch'
          
          }}>
      <View style = {{
          backgroundColor: 'red',
          flex: 3,
          //width: 100,
          // height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          // borderRadius: 10
           }}>
        <Text>1</Text>
      </View> 
      <View style = {{
          backgroundColor: 'green',
          flex: 1,
          // width: 100,
          // height: 100,
           justifyContent: 'center',
          alignItems: 'center'}} >
          <Text>2</Text>
        </View> 
      <View  style = {{
          backgroundColor: 'blue',
          flex: 1,
          // width: 100,
          // height: 100,
          justifyContent: 'center',
          alignItems: 'center'}}
          >
        <Text>3</Text>
        </View> 

    </View>
  );
}

