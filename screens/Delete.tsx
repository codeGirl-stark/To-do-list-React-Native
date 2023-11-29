import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react'

const Delete = ({route, navigation}) => {

  const receivedData = route.params?.data || {};
  const [num, setNum] = useState('');

  useEffect(() => {
    // Votre fonction à exécuter au chargement de la page
    RecupData();
    //console.log("val useE", val);
  }, []);


  const RecupData = async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();      
      const result = await AsyncStorage.multiGet(allKeys);

      result.forEach(element => {
        const elt = JSON.parse(element[1]);
        if (elt.key1 === receivedData) {
          return setNum(element[0]);
        }
      });
      
      //console.log(cle1);
    } catch (error) {
      alert("erreur : "+error)
    }
  }

  const RemoveItem = async () =>{
    try {
      const remove = await AsyncStorage.removeItem(num);
      alert("Supprimé!")
      return navigation.navigate('Tâches');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text  style={styles.text}>Voulez-vous vraiment supprimer?</Text>
      <View style={styles.TouchableOpacity}>
        <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]} onPress={RemoveItem}>
          <Text style={styles.buttonText}>Supprimer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor:'red'}]} onPress={() =>navigation.navigate("Tâches")}>
          <Text style={styles.buttonText}>Annuler</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Delete

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    textAlign: 'center',
  },

  text :{
    textAlign : "center",
    marginBottom: 20,
},
  
  TouchableOpacity:{
    justifyContent: 'center',
    display:'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#3498db', // Couleur de fond du bouton
    padding: 10,
    borderRadius: 5, // Coins arrondis
    marginRight:10,
  },
  buttonText: {
    color: '#fff', // Couleur du texte
    fontSize: 16,
    fontWeight: 'bold',
  },
})