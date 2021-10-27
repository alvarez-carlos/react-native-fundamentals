import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';


const Texto = ({ style }) => {
  const [texto, setTexto] = useState('Hi There!')
  const actualizarTexto = () => {
    setTexto('Hello There!')
  }

  return(
    <Text onPress={actualizarTexto} style={[styles.texto, style]}>{texto}</Text>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red} />
      <Texto style={styles.blue} />
      <Texto style={styles.green} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    flexDirection:'column',
    // flexDirection:'row-reverse',
    // flexDirection:'column-reverse',
    backgroundColor: 'skyblue',
    // alignItems: 'flex-start',
    // alignItems: 'flex-end',
    // alignItems: 'center',
    // alignItems: 'stretch',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    // justifyContent: 'flex-end',
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    // justifyContent: 'space-around',
    // justifyContent: 'space-evenly',
  },
  texto:{
    color:'#fff',
    padding:20,
    backgroundColor:'#000',
    // height:100,
    // width:100
  },
  red:{
    // flex: 1,
    backgroundColor:'red'
  },
  blue:{
    // flex: 2,
    backgroundColor:'blue'
  },
  green:{
    // flex: 3,
    backgroundColor:'green'
  }
});