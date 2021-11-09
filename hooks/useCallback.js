
import React, { useState, useCallback } from 'react'
import { StyleSheet, View, Text, } from 'react-native'

export default function App() {
  const [cont, setCont] = useState(0)
  const incrementar = useCallback(() => {
    setCont(cont + 1)
  }, [cont])

  const decrementar = useCallback(() => {
    setCont(cont - 1)
  }, [cont])

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => incrementar()}>+</Text>
      <Text style={styles.text}>{cont}</Text>
      <Text style={styles.text} onPress={() => decrementar()}>-</Text>
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
  },
})