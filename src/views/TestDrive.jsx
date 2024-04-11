import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'


const TestDrive = ({navigation}) => {

  const [name, SetName] = useState('');
  const [model, SetModel] = useState('');
  const [date, SetDate] = useState('');
  
  const SendTest = () => {
    navigation.navigate('RegisterTestDrive',{name:name, model:model, date:date})
  }

  return (
    <PaperProvider>
        <View>
            <Text style={styles.title}>Solicitud de test Drive</Text>
            <Text style={styles.titleForm}>Nombre completo</Text>
            <TextInput style={styles.textInput} value={name} onChangeText = {name =>SetName(name)} label={"Ingrese el nombre"}></TextInput> 
            <Text style={styles.titleForm}>Modelo del Vehiculo</Text>
            <TextInput style={styles.textInput} value={model} onChangeText = {model =>SetModel(model)} label={"Ingrese el modelo del vehiculo"}></TextInput>
            <Text style={styles.titleForm}>Fecha</Text>
            <TextInput  style={styles.textInput} value ={date} onChangeText ={date =>SetDate(date)} label={"DD/MM/AAAA : HH:hh"}></TextInput>
            <Button mode = "contained" style={styles.button} onPress={SendTest}>Enviar solicitud</Button>
           
            
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
      textAlign:'center',
      backgroundColor:'#afd1e7'
    }
})
export default TestDrive