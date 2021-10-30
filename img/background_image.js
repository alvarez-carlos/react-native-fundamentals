// https://placekitten.com/

import React from 'react'
import { StyleSheet, ImageBackground, Text, View} from 'react-native'


export default function App(){
  return(
   <View style={styles.container}>
    <ImageBackground
      style={styles.img}
      // source={require('./assets/img.jpg')}
      source={{ uri: 'http://placekitten.com/200/300' }}
    >
      <Text>Hello I am a text in the ImageBackground</Text>
    </ImageBackground>
   </View>

  )
    
}


const styles =  StyleSheet.create({
  img:{
    height:200,
    width:300,
  },
  container:{ 
    flex:1,  
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    paddingTop: 20,
  }
})