import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'

const BuyVehicle = () => {
    return (
      <PaperProvider>
          <View>
              <Text style={styles.title}>Comprar Vehiculo</Text>
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
      }
  })

  export default BuyVehicle