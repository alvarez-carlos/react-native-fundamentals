import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = (props) => {
  // const { texto } =  props
  const { children } =  props
  return(
    // <Text style={styles.texto}>{texto}</Text>
    <Text style={styles.texto}>{children}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto>
        Hello World
        <Texto>
           ! I am Carlos
        </Texto>
      </Texto>
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
    color:'#fff',
    padding:20,
    backgroundColor:'#000',
  }
});