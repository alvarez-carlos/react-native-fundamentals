// yarn add react-navigation-stack
// yarn add react-native-safe-area-view react-native-safe-area-context

//ERROR: Unable to resolve module react-native-safe-area-context 
// Solucion :  yarn add react-native-safe-area-view react-native-safe-area-context
// LINK: https:stackoverflow.com/questions/59560312/getting-this-error-error-bundling-failed-error-unable-to-resolve-module-rea
/*
Check for react-native-safe-area-context in your node modules, react-navigation-stack requires that but your node modules do not have that
for installing it you can use the following commands: yarn add react-native-safe-area-view react-native-safe-area-context
 */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const PantallaHome = ({ navigation }) => { 
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button 
        title='Click me!'
        // onPress={() => navigation.push('Contacto')}
        onPress={() => navigation.navigate('Contacto', { _id: '3064654dsdsdaffgafsg8684adfg'})}
      />
    </View>
  )
}

const PantallaContacto = ({ navigation }) => {
    const user_id = navigation.getParam('_id', 'Valor por defecto in case _id is not defined!')
    return (
        <View style={styles.container}>
        <Text>Contacto! - User_id: {user_id}</Text>
        <Button 
            title='Click me!'
            // onPress={() => navigation.push('Home')}
            onPress={() => navigation.goBack()}
        />
        </View>
    )   
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: PantallaHome
  },
  Contacto: {
    screen: PantallaContacto
  }
}, { initialRouteName: 'Home' }) 

// export default createAppContainer(AppNavigator)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
