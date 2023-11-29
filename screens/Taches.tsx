import React, { useState } from 'react';
import * as Progress from 'react-native-progress';
import { 
  FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react';
import { stringify } from 'postcss';
import Update from './Update';


const arrayTask = [];

const Taches = ({navigation}) => {
  const [val, setVal] = useState([]);
  // var val: any;

  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    // Votre fonction à exécuter au chargement de la page
    getData();
    //console.log("val useE", val);
  }, []);

  const getData = async () => {
    try {

      //Supprimer ce qui se génère automatiquement
      await AsyncStorage.removeItem('EXPO_CONSTANTS_INSTALLATION_ID');
      await AsyncStorage.removeItem('LS_W_ON_PAGE');

      // Récupérer toutes les clés stockées dans AsyncStorage
      const allKeys = await AsyncStorage.getAllKeys();

      // Utiliser multiGet pour récupérer les valeurs associées à toutes les clés
      const result = await AsyncStorage.multiGet(allKeys);


      //Convertir chaque element du tableau result en objet
      result.forEach(element => {
        const key = element[0];
        const elt = JSON.parse(element[1]);
        arrayTask.push(key,elt)
      });

      //Filtrer les objets avec trois clés
      setVal(arrayTask.filter(obj => Object.keys(obj).length === 3));
      //console.log(val);

    } catch (error) {
      console.log(error);
    }
  };

  const Item = ({item, onPress, backgroundColor, textColor, display,}) => {
    switch (item.key3) {
      case "25":
        return (
          <View style={{backgroundColor: '#ffc9ef', marginBottom: 5,}}>
            <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
            <Text style={[styles.title, {color: textColor}]}>{item.key1}</Text>
            <View style={{display:display}}>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={styles.descrition}>{item.key2}</Text>
                <Text style={styles.descrition}>Progression de la tâche</Text>
              </View>
              <Progress.Bar progress={0.3} width={200} style={styles.niveau}/>
              <View style={styles.TouchableOpacity}>
                <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]} onPress={() =>navigation.navigate("Update", {data :(item.key1)})}>
                  <Text style={styles.buttonText}>Modifier</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {backgroundColor:'red'}]} onPress={() =>navigation.navigate("Delete", {data :(item.key1)})}>
                  <Text style={styles.buttonText}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            </View>
            </TouchableOpacity>
          </View>
        )
        break;

        case "50":
        return (
          <View style={{backgroundColor: '#ffc9ef', marginBottom: 5,}}>
            <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
            <Text style={[styles.title, {color: textColor}]}>{item.key1}</Text>
            <View style={{display:display}}>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={styles.descrition}>{item.key2}</Text>
                <Text style={styles.descrition}>Progression de la tâche</Text>
              </View>
              <Progress.Bar progress={0.5} width={200} style={styles.niveau}/>
              <View style={styles.TouchableOpacity}>
                <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]} onPress={() =>navigation.navigate("Update", {data :(item.key1)})}>
                  <Text style={styles.buttonText}>Modifier</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {backgroundColor:'red'}]} onPress={() =>navigation.navigate("Delete", {data :(item.key1)})}>
                  <Text style={styles.buttonText}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            </View>
            </TouchableOpacity>
          </View>
        )
        break;

        case "75":
        return (
          <View style={{backgroundColor: '#ffc9ef', marginBottom: 5,}}>
            <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
            <Text style={[styles.title, {color: textColor}]}>{item.key1}</Text>
            <View style={{display:display}}>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={styles.descrition}>{item.key2}</Text>
                <Text style={styles.descrition}>Progression de la tâche</Text>
              </View>
              <Progress.Bar progress={0.8} width={200} style={styles.niveau}/>
              <View style={styles.TouchableOpacity}>
                <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]} onPress={() =>navigation.navigate("Update", {data :(item.key1)})}>
                  <Text style={styles.buttonText}>Modifier</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {backgroundColor:'red'}]} onPress={() =>navigation.navigate("Delete", {data :(item.key1)})}>
                  <Text style={styles.buttonText}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            </View>
            </TouchableOpacity>
          </View>
        )
        break;

        case "100":
        return (
          <View style={{backgroundColor: '#ffc9ef', marginBottom: 5,}}>
            <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
            <Text style={[styles.title, {color: textColor}]}>{item.key1}</Text>
            <View style={{display:display}}>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={styles.descrition}>{item.key2}</Text>
                <Text style={styles.descrition}>Progression de la tâche</Text>
              </View>
              <Progress.Bar progress={1} width={200} style={styles.niveau}/>
              <View style={styles.TouchableOpacity}>
                <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]} onPress={() =>navigation.navigate("Update", {data :(item.key1)})}>
                  <Text style={styles.buttonText}>Modifier</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {backgroundColor:'red'}]} onPress={() =>navigation.navigate("Delete", {data :(item.key1)})}>
                  <Text style={styles.buttonText}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            </View>
            </TouchableOpacity>
          </View>
        )
        break;
    
      default:
        return (
          <View style={{backgroundColor: '#ffc9ef', marginBottom: 5,}}>
            <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
            <Text style={[styles.title, {color: textColor}]}>{item.key1}</Text>
            <View style={{display:display}}>
              <View style={{display:'flex',flexDirection:'column'}}>
                <Text style={styles.descrition}>{item.key2}</Text>
                <Text style={styles.descrition}>Progression de la tâche</Text>
              </View>
              <Progress.Bar progress={0} width={200} style={styles.niveau}/>
              <View style={styles.TouchableOpacity}>
                <TouchableOpacity style={[styles.button, {backgroundColor:'blue'}]} onPress={() =>navigation.navigate("Update", {data :(item.key1)})}>
                  <Text style={styles.buttonText}>Modifier</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, {backgroundColor:'red'}]} onPress={() =>navigation.navigate("Delete", {data :(item.key1)})}>
                  <Text style={styles.buttonText}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            </View>
            </TouchableOpacity>
          </View>
        )
        break;
    }
   
  };


  
  const renderItem = ({item}) => {
    const backgroundColor = item.key1 === selectedId ? '#6e3b6e' : '#fff';
    const color = item.key1 === selectedId ? '#fff' : '#000';
    const display = item.key1 === selectedId?'block':'none';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.key1)}
        backgroundColor={backgroundColor}
        textColor={color}
        display={display}
      />
    );
  };
  
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Liste des tâches</Text>   
      <FlatList 
        data={val}
        renderItem = {renderItem}
      keyExtractor = {item => item.key1}
      />
      <Button 
      title='Nouvelle tâche?'
      onPress={() =>navigation.navigate("Add")} />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
  },
  descrition :{
    textAlign:'center',
    fontSize: 20,
    color:'#fff',
    marginBottom:20,
  },
  niveau:{
    position:'relative',
    left:'42%',
  },
  TouchableOpacity:{
    justifyContent: 'flex-end',
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
});

export default Taches;