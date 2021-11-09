// https://jsonplaceholder.typicode.com/users
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native'

export default function App(){

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await res.json()
    setUsers(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      
        {loading
        ? 
          <Text style={styles.text}>Loading</Text>
        : 
          <FlatList
            data={users}
            renderItem={({ item }) => <View style={styles.item}><Text>{item.name}</Text></View>}
            keyExtractor={item => item.id}
          />
        }
    </View>
  )
}

const styles =  StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'#fff',
    height:Dimensions.get('window').height - 250,
    width:Dimensions.get('window').width,
  },
  text:{
   fontSize: 24,
   padding: 30,
   backgroundColor: '#eee'
  },
  item:{
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    color: '#000',
}
})