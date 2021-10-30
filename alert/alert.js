// Modal. interactuando con el usuario sin perder el contexto

import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Alert} from 'react-native'


const createDialoge = () => {
  // Alert.alert('Titulo', 'subtitulo', [{},{},{}...], {cancelable: Boolean})
  Alert.alert(
    'Titulo',
    'Mensaje que podemos agregar a este dialogo!',
    [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancelar'
      },
      {
        text: 'Aceptar',
        onPress: () => console.log('Bttn Clicked!'),
      },
      {cancelable: false}
    ]
  )
}

export default function App(){

  return(
   <View style={styles.container}>
    <Button
      title='Click me!'
      onPress={createDialoge}
    />
   </View>

  )
    
}
const styles =  StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  }
})