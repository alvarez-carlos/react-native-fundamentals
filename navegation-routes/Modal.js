import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Logo = () => <Text>Img Logo</Text>

const PantallaHome = ({ navigation }) => { 
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button 
        title='Click me!'
        // onPress={() => navigation.push('Contacto')}3
        onPress={() => navigation.navigate('Contacto', { _id: '3064654dsdsdaffgafsg8684adfg', title: 'Contact' })}
      />
    </View>
  )
}

const myModal = () => {
  return (
    <View>
      <Text>Hello World!</Text>
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



PantallaHome.navigationOptions = {
  title: 'Inicio',
  headerRight: <Button title='Bttn' color='#222' onPress={() => alert('Menu!')}/>
}


PantallaContacto.navigationOptions = ({ navigation, navigationOptions }) => {
  // const title = navigation.getParam('title', 'Contact us!')
  return ({
    // title: navigation.getParam('title', 'Contact us!'),
    headerRight: (
      <Button 
        title='Bttn' 
        color='#222' 
        // onPress={() => alert('Menu!')}
        // onPress={() => navigation.getParam('incrementar')()}
        onPress={navigation.getParam('incrementar')}
      />
    ),
    headerTitle: <Logo />,
    headerStyle:{
      // backgroundColor: 'orange' //override the brading or general styles settings
      backgroundColor: navigationOptions.headerStyle.backgroundColor //I can access the styles set in the StackNavigator.
    },
  })
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: PantallaHome
  },
  Contacto: {
    screen: PantallaContacto
  },
  myModal: {
    screen: myModal
  }
}, 
{ initialRouteName: 'Home' ,
  defaultNavigationOptions: {
    headerStyle:{
      backgroundColor: '#fff'
    },
    headerTintColor: '#000',
    headerTitleStyle:{
      fontWeight: '700'   //100 , 700, 900, 'bold'
    }
  }
}) 


const RootStack = createStackNavigator({
  Main: AppNavigator,
  myModal: myModal
},
{
  mode: 'modal',
  headerMode: 'none'
})






// export default createAppContainer(AppNavigator)

// const AppContainer = createAppContainer(AppNavigator)
const AppContainer = createAppContainer(RootStack)


// export default AppContainer
export default AppContainer



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
