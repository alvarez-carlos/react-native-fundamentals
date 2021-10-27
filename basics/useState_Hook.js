import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';


const Texto = () => {
  const [texto, setTexto] = useState('Hi There!')
  const actualizarTexto = () => {
    setTexto('Hello There!')
  }

  return(
    <Text onPress={actualizarTexto} style={{color:'#fff', padding:20, backgroundColor:'#555'}}>{texto}</Text>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Texto />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    padding:20,
    backgroundColor:'#000',
  }
});