import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'

const Quotation = () => {
  return (
  <PaperProvider>
    <View>
        <Text style = {styles.title}>Solicitud de cotizacion</Text>
        <Text style={styles.titleForm}>Nombre completo</Text>
        <TextInput style={styles.textInput} label={"Nombre"}/>    
        <Text style={styles.titleForm}>Modelo del Vehiculo</Text>
        <TextInput style={styles.textInput} label={"Modelo del vehiculo"}/>    
        <Text style={styles.titleForm}>Correo</Text>
        <TextInput style={styles.textInput} label={"example@correo.com"}/>
        <Button mode = "contained" style={styles.button}>Enviar solicitud</Button>                      
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
    titleForm:{
        textAlign:'center',
        fontSize: 20,
        color: 'black',
        marginVertical:10

    },
    button:{
      marginVertical:30,
      backgroundColor: '#0f83b8'
    },
    textInput:{
      backgroundColor:'#afd1e7'
    }
})
export default Quotation