import { StyleSheet, TextInput, View, SafeAreaView, Button, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react';

const login = ({navigation}) => {

  const [mail, onChangeEmail] = useState('');
  const [password1, onChangePwd1] = useState('');
  const [password2, onChangePwd2] = useState('');

  const getData = async () => {
    
    try {
      if (!mail || !password1 || !password2 ) {
        alert('Veuillez remplir tous les champs!');
      } else{
        const jsonValue = await AsyncStorage.getItem(mail);
        const data = jsonValue != null ? JSON.parse(jsonValue) : null;
        if (password1 == (password2)) {
          if (data.key3 == String(mail)) {
            if (data.key4 == String(password1)) {
              alert("Bienvenu "+data.key1+" "+data.key2)
              return navigation.navigate("Tâches")
            } else{
              alert("Mot de passe incorrect!")
            }
          } else{
            alert("Email incorrect!")
          }
        } else {
          alert("Entrez le même mot de passe!")
        }
      }  
    } catch (e) {
     console.error(e);
    }
  };
  
  

  return (
    <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={mail}
          onChangeText={(text) => onChangeEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password1}
          onChangeText={(text) => onChangePwd1(text)}
          autoCapitalize="none"
          secureTextEntry={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmer le mot de passe"
          value={password2}
          onChangeText={(text) => onChangePwd2(text)}
          autoCapitalize="none"
          secureTextEntry={true}
        />

        <View style={styles.TouchableOpacity}>
          <TouchableOpacity style={styles.button} onPress={getData}>
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Tâches")}>
            <Text style={styles.buttonText}>Liste des tâches</Text>
          </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    textAlign:"center",
  },

  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },

  TouchableOpacity:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  button: {
    backgroundColor: '#3498db', // Couleur de fond du bouton
    padding: 10,
    borderRadius: 5, // Coins arrondis
    marginBottom: 5,
  },
    buttonText: {
    color: '#fff', // Couleur du texte
    fontSize: 16,
    fontWeight: 'bold',
  },
})