// Modal. interactuando con el usuario sin perder el contexto

import React, { useState } from 'react'
import { StyleSheet, Modal, Text, View, Button} from 'react-native'


export default function App(){

  const [modal, setModal] = useState(false) //Modal is not visible at starting
  return(
   <View style={styles.container}>
     
     {/* Modal */}
     <Modal
      animationType={'slide'}
      // transparent={true}
      transparent={true}
      visible={modal}
      // onRequestClose={() => {}} //Nos permite ejecutar codigo una vez el modal es cerrado.
     >
      <View style={styles.center}>
        <View style={styles.content}>
          <Text>Soy un modal!</Text>
          <Button title='Close Modal' onPress={() => setModal(!modal)}></Button>
        </View>
      </View>
     </Modal>

      {/*  Bttn to open the Modal */}
      <Text>Soy un texto y no pertenezco al modal. Formo parte del contexto de la aplciacion!</Text>
      <Text>Soy un texto y no pertenezco al modal. Formo parte del contexto de la aplciacion!</Text>
      <Text>Soy un texto y no pertenezco al modal. Formo parte del contexto de la aplciacion!</Text>
      <Text>Soy un texto y no pertenezco al modal. Formo parte del contexto de la aplciacion!</Text>
      <Text>Soy un texto y no pertenezco al modal. Formo parte del contexto de la aplciacion!</Text>
      <Text>Soy un texto y no pertenezco al modal. Formo parte del contexto de la aplciacion!</Text>
      <Text>Soy un texto y no pertenezco al modal. Formo parte del contexto de la aplciacion!</Text>
      <Text>Soy un texto y no pertenezco al modal. Formo parte del contexto de la aplciacion!</Text>
      <Text>Soy un texto y no pertenezco al modal. Formo parte del contexto de la aplciacion!</Text>


      <Button
        title='Open Modal'
        onPress={() => setModal(!modal)}
      />  
   </View>

  )
    
}


const styles =  StyleSheet.create({
  content:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#eee',
    margin: 25,
  },
  center:{
    flex:1,
    alignItems:'stretch',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.3)',
  },
  container:{ 
    flex:1,  
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'stretch',
    paddingTop: 22,
  }
})