// yarn add react-navigation-drawer


/* ERROR FOUND: 
TypeError: interpolate is not a function. (In 'interpolate(this.progress, {
              inputRange: [PROGRESS_EPSILON, 1],
              outputRange: [0, 1]
            })', 'interpolate' is undefined)

SOLUTION: 
it is a version conflict between react-navigation-drawer package with react-native-reanimated. interpolate() was renamed to interpolateNode() in react-native-reanimated@2+.
    1. Open the Drawer.js file found in /node_modules/react-navigation-drawer/lib/module/views/ folder
    2. You will find interpolate in two places, replace the interpolate with interpolateNode in those two places.
 */

    import React, { useEffect, useState } from 'react';
    import { StyleSheet, Text, View, Button } from 'react-native';
    import { createAppContainer, createSwitchNavigator} from 'react-navigation';
    import { createStackNavigator } from 'react-navigation-stack';
    import { createBottomTabNavigator } from 'react-navigation-tabs';
    import { createDrawerNavigator } from 'react-navigation-drawer';
    
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
              onPress={() => navigate('Home')}
          />
          </View>
      )   
    }
    
    
    const AppNavigator = createSwitchNavigator({
      Home: {
        screen: PantallaHome
      },
      Contacto: {
        screen: PantallaContacto
      }
    },
    {
      initialRouteName: 'Home',
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