// Pata utilizar la camera necesitamos utilizar el paquete o dependencia expo-camera


import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Camera } from 'expo-camera'



export default function App(){

  const [permisos, setPermisos] = useState(null)
  const [typeOfCamera, setTypeOfCamera] = useState(Camera.Constants.Type.back)

  const getPermisos = async () => {
    // const { status } = await Camera.requestPermissionsAsync()
    const { status } = await Camera.requestCameraPermissionsAsync()
    setPermisos(status == 'granted')
    console.log(status)
  }

  useEffect(() => {
    getPermisos()
  })

  if (permisos === null) {
    return <View><Text>Esperando permisos...</Text></View>
  } 
  if (permisos === false) {
    return <View><Text>No tenemos permiso a la Camara...</Text></View>
  }
  return (
    <View style={styles.container}>
     <Camera
        style={styles.camera}
        type={typeOfCamera}
      >
        <View>
          <Button
              title='Switch Camera'
              onPress={() => {
                const { front, back } = Camera.Constants.Type
                const newType = typeOfCamera === back ? front : back
                setTypeOfCamera(newType)
              }}
            />
        </View>
      </Camera>     
    </View>
  )
}

const styles =  StyleSheet.create({
  camera:{
    flex:1,
    justifyContent: 'flex-end'
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'#fff',
  }
})