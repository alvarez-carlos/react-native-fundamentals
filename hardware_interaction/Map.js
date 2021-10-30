//Para utilizar los mapas en nuestr app de react-native, necesitamos instalar la dependencia react-native-maps. Estos con los mapas nativos del telefonos (no nos va a mostrat la version web de el.)
//expo install react-native-maps

import React, { useEffect }from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

import MapView from 'react-native-maps'

import * as Location from 'expo-location'
import Contants from 'expo-constants' //Las constantes nos permiten conocer los permisos del usuario


export default function App(){

  const buscaLocation = async () => {
    // const { status } = await Location.requestPermissionsAsync()
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted'){
      return Alert.alert('No tenemos los permisos necesarios para acceder a la location!')
    }
    const location = await Location.getCurrentPositionAsync({})
    console.log(location)
  }

  useEffect(() => {
    buscaLocation()
  })

  return(
   <View style={styles.container}>
     <MapView style={styles.map}>
     </MapView> 
   </View>
  )
}

const styles =  StyleSheet.create({
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  }
})