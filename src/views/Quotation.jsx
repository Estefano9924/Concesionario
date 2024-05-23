import React, { useContext, useEffect,useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'
import firebase from '../../firebase'
import FirebaseContext from '../../context/firebase/firebaseContext'
import pedidoContext from '../../context/pedidos/pedidoContext'



const Quotation = () => {

  const {solQuotation, obtainQuotation} = useContext(FirebaseContext)
  const [saveQuotation,setSaveQuotation] = useState({
    correoC:'',
    modeloVehiculoC:'',
    nombreCompletoC:''
  });
  useEffect(()=>{
    obtainQuotation()
  },[]);
  const handleInputQuotation = (nameQ,value)=>{
    setSaveQuotation({
      ...saveQuotation,
      [nameQ]:value
    });
  };
 const handleSendQuotation = async () =>{
  const {nombreCompletoC, modeloVehiculoC, correoC } = saveQuotation;
  if(nombreCompletoC && modeloVehiculoC && correoC) {
    try{
      await firebase.db.collection('quotationC').add(saveQuotation);
      console.log('Cotizacion enviada');
    }catch(error){
      console.log(error);
    }
  } else{
    console.log('Validar los campos por favor')
  }
 }

  return (
  <PaperProvider>
    <View>
        <Text style = {styles.title}>Solicitud de cotizacion</Text>
        <Text style={styles.titleForm}>Nombre completo</Text>
        <TextInput 
        style={styles.textInput} 
        label={"Nombre Completo"}
        value = {saveQuotation.nombreCompletoC}
        onChangeText={(value)=>handleInputQuotation('nombreCompletoC',value)}
        />    
        <Text style={styles.titleForm}>Modelo del Vehiculo</Text>
        <TextInput style={styles.textInput}
         label={"Modelo del vehiculo"}
         value = {saveQuotation.modeloVehiculoC}
        onChangeText={(value)=>handleInputQuotation('modeloVehiculoC',value)}
         />    
        <Text style={styles.titleForm}>Correo</Text>
        <TextInput 
        style={styles.textInput} 
        label={"example@correo.com"}
        value = {saveQuotation.correoC}
        onChangeText={(value)=>handleInputQuotation('correoC',value)}
        
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