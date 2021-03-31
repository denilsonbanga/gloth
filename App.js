import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Traducao,inicial } from './views'

export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="inicial"
          component={inicial}
          options={{ 
            title: "Dicionário",
            headerTintColor:'#333',
            headerStyle:{backgroundColor:'#da2'},
            headerTitleStyle:{ fontWeight:'bold', alignSelf:'center'} }}
          
        />

        <Stack.Screen name="Palavras"
          component={Home}
          options={{
            headerShown:false, 
           title: "Palavras",
           headerTintColor:'#333',
           headerStyle:{backgroundColor:'#da2'},
           headerTitleStyle:{ fontWeight:'bold', alignSelf:'center'} }}
        />

        <Stack.Screen name="Traducao" 
        component={Traducao} 
        options={{title: "Tradução", 
        headerTintColor:'#333',
        headerStyle:{backgroundColor:'#da2'},
        headerTitleStyle:{ fontWeight:'bold', alignSelf:'center'} }        
        } />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
