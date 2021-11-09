//useEfect es utilizado para poder efectuar llamadas asincronas o para poder realizar cualquier accion que genere efectos y efecto es algo que va a escribir o leer del mismo dispositivo o de una API o escribir o leer de en una DB.
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function App(){

  const [cont,  setCont] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(
      () => {
        setLoading(false)
      }
      , 5000)
  }, [])

  return (
    <View style={styles.container}>
      <Text 
        onPress={() => setCont(cont + 1)}
        style={styles.text}
      >
        {loading ? <Text>Loading...</Text> : cont}
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