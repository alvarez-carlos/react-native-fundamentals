//to work with geolocalizacion con Expo, necesitamos instalar un paquete de tercero, en este caso  Location.
// https://docs.expo.dev/versions/latest/sdk/location/
// expo install expo-location

import React, { useEffect }from 'react'
import { StyleSheet, View, Text } from 'react-native'
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