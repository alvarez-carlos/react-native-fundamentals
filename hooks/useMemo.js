//Use memo realiza una calculacion una vez, y luego si los argumentos no cambian entonces retorna el resultado anterior evitando asi la calculacion con argumentos repetidos ya que obtendra el mismo resultado.

import React, { useMemo, useState } from 'react'
import { StyleSheet, View, Text, } from 'react-native'


const users = [{ name: 'Jhon', age:45 }, { name:'Peter', age:31 }]

export default function App(){

  const [cont, setCont] = useState(0)

  const imprime = () => {
    alert('Hi!')
    const newCont = cont + 1
    setCont(newCont)
  }

  const totalAge = useMemo(() => {
    let age = 0
    console.log('Calculando ...')
    users.forEach(x => {
      age = age + x.age
    })
    return age
  }, [users])

  console.log('Edad total!', totalAge)

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => imprime()}>Hello</Text>
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