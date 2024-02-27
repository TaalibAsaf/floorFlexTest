import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Splash from './components/Splash';
import Home from "./components/Home"

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
      <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

