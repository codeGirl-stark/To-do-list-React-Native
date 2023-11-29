import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import register from "./screens/register";
import login from './screens/login';
import Welcome from './screens/Welcome';
import Taches from './screens/Taches';
import Add from './screens/Add';
import Update from './screens/Update';
import Delete from './screens/Delete';

const Stack = createNativeStackNavigator();


//const image = require("./assets/fond2.jpeg");

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name = "Welcome"
          component = {Welcome}
        />
        <Stack.Screen 
          name = "Register"
          component = {register}
        />
        <Stack.Screen 
          name = "Login"
          component = {login}
        />
        <Stack.Screen 
          name = "Tâches"
          component = {Taches}
        />
        <Stack.Screen 
          name = "Add"
          component = {Add}
        />
        <Stack.Screen 
          name = "Update"
          component = {Update}
        />
        <Stack.Screen 
          name = "Delete"
          component = {Delete}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  