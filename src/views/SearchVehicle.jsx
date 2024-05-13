import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Button, PaperProvider, Text, TextInput, Modal, Portal } from 'react-native-paper'
import {Container} from "native-base"
//import globalStyles from '../styles/globalStyles';


const SearchVehicle = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [vehicle, setVehicle] = useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const vehicleChange = (text) =>{
    setVehicle(text);
  }
  const Send = () => Alert.alert("El vehiculo "+vehicle+" no se encuentra");
  return (
    <PaperProvider>
        
      <Text style={styles.title}>Busqueda de vehiculos</Text>
      <Text style={styles.subText}>Ingrese el modelo del vehiculo</Text>
      <TextInput style = {styles.textInput} value={vehicle} onChangeText={vehicleChange} />
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.container}>
          <Text>Example Modal</Text>
        </Modal>
      </Portal>
      <Button style={styles.button} onPress={Send}>Buscar</Button>
        
    </PaperProvider>
  )
}
const styles = StyleSheet.create({
    title:{
        backgroundColor: '#0f83b8',
        textAlign:'center',
        fontSize: 30,
        color: 'black',
        marginVertical:30
    },

    container:{
      backgroundColor: 'white',
      padding: 20, 
      marginHorizontal:30
    },

    button:{
      marginTop: 10,
      backgroundColor: '#0f83b8',
      color: 'white'
    },
    textInput:{
      backgroundColor: '#afd1e7'
    },
    subText:{
      fontSize: 20,
      textAlign:'center'
    }
})
export default SearchVehicle