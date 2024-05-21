import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'
import Home from './Home';

const BuyVehicle = ({navigation}) => {
    return (
      <PaperProvider>
          <View>
              <Text style={styles.title}>Comprar Vehiculo</Text>
              <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('Home')}}>Regresar al home</Button>
          </View>
      </PaperProvider>
    )
  }
  const styles = StyleSheet.create({
      title:{
          backgroundColor: '#0f83b8',
          textAlign:'center',
          fontSize: 30,
          color: 'white',
          marginVertical:30
      },
      button: {
        marginHorizontal: 10,
        marginVertical:10,
        backgroundColor: '#0f83b8'
      }
  })

  export default BuyVehicle