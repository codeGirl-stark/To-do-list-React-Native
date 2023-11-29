import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';


const Add = ({navigation}) => {

  const [titre, onChangeTitre] = useState('');
  const [description, onChangeDescription] = useState('');
  const [selectedNiveau, setSelectedNiveau] = useState();

  const [nbr, setNbr] = useState(0);
  const arrayTask = [];

  useEffect(() => {
    // Votre fonction à exécuter au chargement de la page
    RecupData();
    //console.log(nbr);
  }, []);

  //Récupérer les valeurs du asynchstorage
  const RecupData = async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();      
      const result = await AsyncStorage.multiGet(allKeys);

       //Convertir chaque element du tableau result en objet
      result.forEach(element => {
        const elt = JSON.parse(element[1]);
        arrayTask.push(elt)
      });
      setNbr(arrayTask.filter(obj => Object.keys(obj).length === 3).length);

    } catch (error) {
      alert("erreur : "+error)
    }
  }

  const SaveTask = async () =>{
    try{
      const data = {
          key1 : titre,
          key2 : description,
          key3 : selectedNiveau,
      };

      if (!titre || !description || !selectedNiveau) {
        alert('Veuillez remplir tous les champs!')
      } else {
        const jsonString = JSON.stringify(data);
        
        var nombre = nbr+1;
        await AsyncStorage.setItem(nombre.toString(), jsonString);
        
        alert("enregistrement réussit!");
        return navigation.navigate("Tâches")
      }
    } catch (error) {
    alert('Erreur lors de la sauvegarde des données:'+error);
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
        placeholder="Titre"
        value={titre}
        onChangeText={(text) => onChangeTitre(text)}
      />

      <TextInput
        editable
        multiline
        numberOfLines={6}
        maxLength={500}
        style={styles.textarea}
        placeholder="Description"
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
      <TouchableOpacity style={styles.button} onPress={SaveTask}>
        <Text style={styles.buttonText}>Ajouter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Tâches")}>
        <Text style={styles.buttonText}>Annuler</Text>
      </TouchableOpacity>
    </View>

  </SafeAreaView>
)
}

export default Add

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