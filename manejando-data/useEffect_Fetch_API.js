// http://jsonplaceholder.typicode.com/

import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'


export default function App(){


  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)


  // useEffect recibe 2 argumentos. la primera es una funcion la cual se va a ejecutar, ella va ejecutar nustros efectos que en este caso es donde nosotos tenemos que llamar a fetch Api. un efecto es cualquier cosa que nosotros no sepamos exactamente el resultado o que que va a ocurrir como cuando escribimos en una base de datos o cuando halamos datos de ella o hacemos un fetch a una API.
  // El segundo argumento de useEffect es un arreglo el cual contiene las dependencias de useEffect. Cadda vez que cambia algunos de estos datos de useEffect la funcion se va a ejecutar nuevamente. Como a nosotros nos interesa que se ejecute una sola vez. Vamos a dejar el arreglo vacio por el momento.
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  if(loading) {
    return <View style={styles.center}><Text>Cargando...</Text></View>
  }

  return(
    <View style={styles.container}>
      {/* Fetched Data from the API */}
      {/* <Text>Cargado!</Text> */}
      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item => String(item.id)}
      />
    </View>
  )
}


const styles =  StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'stretch',
    paddingTop: 20,
  },
  item:{
    padding: 10,
    fontSize: 22,
    borderBottomColor: '#ccc',
    borderBottomWidth:1,
  },
  center:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})