import React, { useContext, useEffect,useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'
import firebase from 'firebase/compat/app'
import FirebaseContext from '../../context/firebase/firebaseContext'
import pedidoContext from '../../context/pedidos/pedidoContext'


const Quotation = () => {

  const {solQuotation, obtainQuotation} = useContext(FirebaseContext)
  const [saveQuotation, setSaveQuotation] = useState({
    nombreCompleto: '',
    modeloVehiculo: '',
    correo: ''
  });
  useEffect(()=>{
    obtainQuotation()
  },[])
  const handleInputQuotation = (name, value) => {
    setSaveQuotation({
      ...saveQuotation,
      [name]:value
    });
  };
  const handleSendQuotation = async ()=>{
    const {nombreCompleto,modeloVehiculo,correo}=saveQuotation;
    if(nombreCompleto && modeloVehiculo && correo){
      try{
        await firebase.db.collection('cotizacion').add(saveQuotation);
        console.log('cotizacion enviada');
      }catch(error){
        console.log(error);
      }
    } else{
      console.log('Validar los campos por favor')
    }
  };
  return (
  <PaperProvider>
    <View>
        <Text style = {styles.title}>Solicitud de cotizacion</Text>
        <Text style={styles.titleForm}>Nombre completo</Text>
        <TextInput 
        style={styles.textInput} 
        label={"Nombre Completo"}
        value={saveQuotation.nombreCompleto}
        onChangeText={(value)=>handleInputQuotation('nombreCompleto',value)}
        />    
        <Text style={styles.titleForm}>Modelo del Vehiculo</Text>
        <TextInput style={styles.textInput}
         label={"Modelo del vehiculo"}
         value={saveQuotation.modeloVehiculo}
        onChangeText={(value)=>handleInputQuotation('modeloVehiculo',value)}
         />    
        <Text style={styles.titleForm}>Correo</Text>
        <TextInput 
        style={styles.textInput} 
        label={"example@correo.com"}
        value={saveQuotation.correo}
        onChangeText={(value)=>handleInputQuotation('correo',value)}
        />
        <Button 
        mode = "contained" 
        style={styles.button}
        onPress={handleSendQuotation}
        >Enviar solicitud
        </Button>   
                     
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