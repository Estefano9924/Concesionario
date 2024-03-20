import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Button, PaperProvider, Text, TextInput, Modal, Portal } from 'react-native-paper'

//import globalStyles from '../styles/globalStyles';


const SearchVehicle = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const Send = () => Alert.alert("El carro no se encuentra");
  return (
    <PaperProvider>
        
      <Text style={styles.title}>Busqueda de vehiculos</Text>
      <Text >Ingrese el modelo del vehiculo</Text>
      <TextInput
        label="Buscar modelo del vehiculo" />
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.container}>
          <Text>Example Modal</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 10 }} onPress={Send}>Buscar</Button>
        
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

    container:{
      backgroundColor: 'white',
      padding: 20, 
      marginHorizontal:30
    }
})
export default SearchVehicle