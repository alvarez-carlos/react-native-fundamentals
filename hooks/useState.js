//Use state podemos utilizarlo para tener un estado dentro de nuestros componentes funcionales.
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function App(){

  const [cont, setCont] = useState(0)

  return (
    <View style={styles.container}>
      <Text 
        onPress={() => setCont(cont + 1)}
        style={styles.text}
      >
        {cont}
      </Text>
    </View>
  )
}

const styles =  StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  text:{
   fontSize: 24,
   padding: 30,
   backgroundColor: '#eee'
  }
})