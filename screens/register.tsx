import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity, Button, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const register = ({navigation}) => {

  const [surname, onChangeSurname] = useState('');
  const [name, onChangeName] = useState('');
  const [mail, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');


  const saveData = async () => {
    try {
      // Données que vous souhaitez sauvegarder
      const myData = {
        key1: surname,
        key2: name,
        key3: mail,
        key4: password,
        // ... autres clés et valeurs
      };

      if (!surname || !name || !mail || !password ) {
        alert('Veuillez remplir tous les champs!');
      } else{
        // Convertir les données en chaîne JSON
        const jsonString = JSON.stringify(myData);

        // Sauvegarder les données dans AsyncStorage
        await AsyncStorage.setItem(myData.key3, jsonString);

        //alert('Enregistrement effectué avec succès.');
        return navigation.navigate("Login")      
      }
    } catch (error) {
      alert('Erreur lors de la sauvegarde des données:'+error);
    }
  };

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Inscription</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={surname}
          onChangeText={(text) => onChangeSurname(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Prénom"
          value={name}
          onChangeText={(text) => onChangeName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={mail}
          onChangeText={(text) => onChangeEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={(text) => onChangePassword(text)}
          autoCapitalize="none"
          secureTextEntry={true}
        />

      <View style={styles.TouchableOpacity}>
        <TouchableOpacity style={styles.button} onPress={saveData}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Vous avez déjà un compte?</Text>

        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
        
      </SafeAreaView>
      
      
    );
  };

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
  fixToText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text:{
    textAlign: "center",
    margin:10,
  },


TouchableOpacity:{
  justifyContent: 'center',
  alignItems: 'center',
},

button: {
  backgroundColor: '#3498db', // Couleur de fond du bouton
  padding: 10,
  borderRadius: 5, // Coins arrondis
},
  buttonText: {
  color: '#fff', // Couleur du texte
  fontSize: 16,
  fontWeight: 'bold',
},

});

export default register;