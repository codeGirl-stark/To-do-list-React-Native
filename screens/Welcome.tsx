import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'
import React from 'react'

//const image = require("./assets/fond2.jpeg");

const Welcome = ({navigation}) => {
  return (
    <View style ={ styles.container}>
        <Text style ={ styles.text}>Prêt pour ajouter des tâches?</Text>
        <Button 
            title="Commençons!" 
            onPress={() =>navigation.navigate("Register")}
        />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent : "center",
        textAlign : "center",
    },

    text :{
        textAlign : "center",
    }
})