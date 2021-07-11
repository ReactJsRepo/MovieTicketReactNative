import React from 'react';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import MainStackNavigator from './Components/Nav'
import {Provider} from 'react-redux'
import store  from './Store'


export default function App() {
  return (
    <Provider store={store}>

     <MainStackNavigator />

     </Provider>

     );
    }
 


