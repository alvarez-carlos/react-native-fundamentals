
import React, { useReducer } from 'react'
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native'

const initialState = {
  cont: 0
}

const reducer = (state, action) => {
  // action.type
  switch(action.type){
    case 'incrementar':{
      return { cont: state.cont + 1 }
    }
    case 'decrementar':{
      return { cont: state.cont - 1 }
    }
    default:{
      return state
    }
  }
}


export default function App(){

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => dispatch({ type: 'incrementar' })}>+</Text>
      <Text style={styles.text}>{state.cont}</Text>
      <Text style={styles.text} onPress={() => dispatch({ type: 'decrementar' })}>-</Text>
   </View>
  )
}

const styles =  StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height:Dimensions.get('window').height - 250,
    width:Dimensions.get('window').width,
  },
  text:{
   fontSize: 24,
   padding: 30,
   backgroundColor: '#eee'
  },
})