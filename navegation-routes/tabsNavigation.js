//yarn add react-navigation-tabs

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const Logo = () => <Text>Img Logo</Text>

const PantallaHome = ({ navigation }) => { 
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button 
        title='Click me!'
        // onPress={() => navigation.push('Contacto')}
        onPress={() => navigation.navigate('Contacto', { _id: '3064654dsdsdaffgafsg8684adfg', title: 'Contact' })}
      />
    </View>
  )
}

const PantallaContacto = ({ navigation }) => {
  const [cont, setCont] = useState(0)
  const incrementar = () => setCont(cont + 1)
  useEffect(() => {
    navigation.setParams({ incrementar })
  }, [cont])


  const user_id = navigation.getParam('_id', 'Valor por defecto in case _id is not defined!')
  return (
      <View style={styles.container}>
      <Text>Contacto! - User_id: {user_id} - Cont: {cont}</Text>
      <Button 
          title='Click me!'
          // onPress={() => navigation.push('Home')}
          onPress={() => navigation.navigate('myModal')}
      />
      </View>
  )   
}

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: PantallaHome
  },
  Contacto: {
    screen: PantallaContacto
  }
},
{
  initialRouteName: 'Home',
  // defaultNavigationOptions: {
  //   tabBarOptions: {
  //     activeTintColor:'#e91e63',
  //     inactiveTintColor: 'black',
  //     labelStyle:{
  //       fontsize: 16
  //     },
  //     style:{
  //       backgroundColor: '#fec'
  //     }
  //   }
  // }

  defaultNavigationOptions: ({ navigation }) => (
    {
      tabBarOptions: {
        activeTintColor:'white',
        inactiveTintColor: 'blue',
        labelStyle:{
          fontSize: 16,
          fontWeight: 'bold'
        },
        style:{
          backgroundColor: navigation.state.routeName == 'Home' ? 'purple' : 'black'
        }
      }
    }
  )
})

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});