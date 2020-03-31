import React, { Component } from 'react';
import {
   View,
   Text,
   TouchableHighlight,TouchableOpacity,TextInput,
   StyleSheet,Dimensions,Image,AsyncStorage,ActivityIndicator,Platform,ToastAndroid
} from 'react-native' ;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FisrtPage from './components/FirstPage';
import HomePage from './components/HomePage';
import WeatherDtls from './components/WeatherDtls';
import ProfileFirst from './components/ProfileFirst';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="FisrtPage" component={FisrtPage} options={{headerShown:false}} />
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}} />
        <Stack.Screen name="WeatherDtls" component={WeatherDtls} options={{ title: 'Weather Details' }}/>
        <Stack.Screen name="ProfileFirst" component={ProfileFirst} options={{ headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;