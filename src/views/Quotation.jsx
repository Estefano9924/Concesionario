import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'

const Quotation = () => {
  return (
  <PaperProvider>
    <View>
        <Text style = {styles.title}>Solicitud de cotizacion</Text>
        <Text style={styles.titleForm}>Nombre completo</Text>
        <TextInput label={"Nombre"}/>    
        <Text style={styles.titleForm}>Modelo del Vehiculo</Text>
        <TextInput label={"Modelo del vehiculo"}/>    
        <Text style={styles.titleForm}>Correo</Text>
        <TextInput label={"example@correo.com"}/>
        <Button mode = "contained" style={styles.button}>Enviar solicitud</Button>                      
    </View>
  </PaperProvider>
  )
}
const styles = StyleSheet.create({
    title:{
        backgroundColor: '#7F62F0',
        textAlign:'center',
        fontSize: 30,
        color: 'black',
        marginVertical:30
    },
    titleForm:{
        textAlign:'center',
        fontSize: 20,
        color: 'black',
        marginVertical:10

    },
    button:{
      marginVertical:30
    }
})
export default Quotation