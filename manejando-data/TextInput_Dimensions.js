import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';


// const width = Dimensions.get('window').width
const { width, height } = Dimensions.get('window')

export default function App() {

  const [textOnView1, setTextOnView1] =  useState('Texto Inicial')
  const [textOnView2, setTextOnView2] =  useState('Texto Inicial')

  const doSomething = (text) => {
    setTextOnView1(text)
  }


  return (
    <View style={styles.container}>
      <View style={styles.subVistas}>
        <Text>{textOnView1}</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Name'
          onChangeText={textingis => doSomething(textingis)}
          defaultValue={textOnView1}
          />
      </View>
      <View style={styles.subVistas}>
        <Text>{textOnView2}</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Name'
          onChangeText={textingis => setTextOnView2(textingis)}
          defaultValue={textOnView2}
          />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#eee',
    justifyContent:'center',
    alignItems:'center',
    width: width,
  },
  subVistas:{
    width:'100%',
  },
  input:{
    backgroundColor:'#fff',
    padding: 10,
    color:'#000',
    width: '100%',
    // width: width

    borderBottomColor: '#ccc',
    borderBottomWidth:1,
  }
})