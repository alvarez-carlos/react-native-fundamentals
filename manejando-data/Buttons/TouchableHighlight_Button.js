import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, TouchableHighlight } from 'react-native';


// const width = Dimensions.get('window').width
const { width, height } = Dimensions.get('window')

export default function App() {

  const [textOnInput, setTextOnView] =  useState('Texto Inicial')
  const [textOnLabel, setTextOnLabel] =  useState('Texto Inicial On Label')

  // const callSetTextOnLabel = () => {
  //   setTextOnLabel(textOnInput)
  // }

  return (
    <View style={styles.container}>
        <Text>{textOnLabel}</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Name'
          onChangeText={textingis => setTextOnView(textingis)}
          defaultValue={textOnInput}
          />
        {/* <Button onPress={callSetTextOnLabel} title='Submit' /> */}
        {/* <Button 
          onPress={() => {
            setTextOnLabel(textOnInput)
            alert('Text ' + textOnInput + ' submitted and Rendered on Label !')
          }}  
          title='Submit' 
        /> */}
        <TouchableHighlight
          onPress={() => {
            setTextOnLabel(textOnInput)
            alert('Text ' + textOnInput + ' submitted and Rendered on Label !')
          }}
          underlayColor={'#999'}
          activeOpacity={0.2}
        >
          <Text>Aceptar</Text>
        </TouchableHighlight>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#eee',
    justifyContent:'center',
    alignItems:'center',
    width: width,
  },
  input:{
    backgroundColor:'#fff',
    padding: 10,
    color:'#000',
    width: '100%',
    // width: width

    borderBottomColor: '#ccc',
    borderBottomWidth:1,
  }
})