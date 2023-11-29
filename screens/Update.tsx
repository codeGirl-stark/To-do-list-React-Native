import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';


const Update = ({route, navigation}) => {

  const [num, setNum] = useState('');
  const [titre, onChangeTitre] = useState('');
  const [description, onChangeDescription] = useState('');
  const [selectedNiveau, setSelectedNiveau] = useState('');


  const receivedData = route.params?.data || {};

  useEffect(() => {
    // Votre fonction à exécuter au chargement de la page
    RecupData();
    //console.log("val useE", val);
  }, []);

  //Récupérer les valeurs dans l'asyncstorage
  const RecupData = async () => {
    try {

      const allKeys = await AsyncStorage.getAllKeys();      
      const result = await AsyncStorage.multiGet(allKeys);

      result.forEach(element => {
        const elt = JSON.parse(element[1]);
        if (elt.key1 === receivedData) {
          return (
            setNum(element[0]),
            onChangeTitre(elt.key1),
            onChangeDescription(elt.key2),
            setSelectedNiveau(elt.key3)
          )
        }
      });
      //console.log(result);
    } catch (error) {
      alert("erreur : "+error)
    }
  }

  const ModifData = async () =>{
      try {
        const data = {
          key1: titre,
          key2 : description,
          key3 : selectedNiveau,
      };

        const jsonString = JSON.stringify(data);
        await AsyncStorage.setItem(num, jsonString);
        
        alert("Modifié!");
        return navigation.navigate("Tâches")

      } catch (error) {
        alert("erreur : "+error)
      }
  }

  const options = [
    { key: 0, label: '00%' },
    { key: 25, label: '25%' },
    { key: 50, label: '50%' },
    { key: 75, label: '75%' },
    { key: 100, label: '100%'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={titre}
        onChangeText={(text) => onChangeTitre(text)}
      />

      <TextInput
        editable
        multiline
        numberOfLines={6}
        maxLength={500}
        style={styles.textarea}
        value={description}
        onChangeText={(text) => onChangeDescription(text)}
        autoCapitalize="none"
        secureTextEntry={true}
      />

      <View style={{justifyContent: 'center', }}>
        <Text style={{textAlign:'center', fontSize:15,}}>Quel est le niveau d'exécution de cette tâche:</Text>
        <Picker
          selectedValue={selectedNiveau}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setSelectedNiveau(itemValue)}
        >
          {options.map((option) => (
            <Picker.Item key={option.key} label={option.label} value={option.key} />
          ))}
        </Picker>
    </View>

    <View style={styles.TouchableOpacity}>
      <TouchableOpacity style={styles.button} onPress={ModifData}>
        <Text style={styles.buttonText}>Modifier</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Tâches")}>
        <Text style={styles.buttonText}>Annuler</Text>
      </TouchableOpacity>
    </View>

  </SafeAreaView>
  )
}

export default Update

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
  
  textarea: {
    borderBottomColor: '#000000',
    borderWidth: 1,
    padding: 20,
    margin : 10,
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