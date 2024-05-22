import React, { useContext, useEffect,useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'
import FirebaseContext from '../../context/firebase/firebaseContext'
import pedidoContext from '../../context/pedidos/pedidoContext'
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebase'


const TestDrive = () => {

  const {solTestDrive, obtainTestDrive} = useContext(FirebaseContext)
  const {conTestDrive} = useContext(pedidoContext);
  const navigation = useNavigation()
  const [saveTestDrive, setSaveTestDrive] = useState({
    nombreCompleto: '',
    modeloVehiculo: '',
    fecha: ''
  });
    useEffect(()=>{
      obtainTestDrive()
    },[])
  const handleInputTestDrive = (name, value) => {
    setSaveTestDrive({
      ...saveTestDrive,
      [name]:value
    });
  };
  const handleSendTestDrive = async ()=>{
    const {nombreCompleto,modeloVehiculo,fecha}=saveTestDrive;
    if(nombreCompleto && modeloVehiculo && fecha){
      try{
        await firebase.db.collection('testDrive').add(saveTestDrive);
        console.log('Test drive enviado');
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
            <Text style={styles.title}>Solicitud de test Drive</Text>
            
            <Text style={styles.titleForm}>Nombre completo</Text>
            <TextInput 
            style={styles.textInput}  
            label={"Ingrese el nombre"}
            value={saveTestDrive.nombreCompleto}
            onChangeText={(value)=>handleInputTestDrive('nombreCompleto',value)}
            >
            </TextInput> 
            <Text style={styles.titleForm}>Modelo del Vehiculo</Text>
            <TextInput 
            style={styles.textInput}  
            label={"Ingrese el modelo del vehiculo"}
            value={saveTestDrive.modeloVehiculo}
            onChangeText={(value)=>handleInputTestDrive('modeloVehiculo',value)}>
            </TextInput>
            <Text style={styles.titleForm}>Fecha</Text>
            <TextInput  
            style={styles.textInput} 
            label={"DD/MM/AAAA : HH:hh"}
            value={saveTestDrive.fecha}
            onChangeText={(value)=>handleInputTestDrive('fecha',value)}>
            </TextInput>
            <Button 
            mode = "contained" 
            style={styles.button}
            onPress={handleSendTestDrive}
            >
              Enviar solicitud
            </Button>

            {solTestDrive.map((testDrive,i)=>{

              const {id,nombreCompleto,modeloVehiculo,fecha} = testDrive
               return(
                <Fragment key={id}>
                
                <Text variant='titleMedium'>La marca es: <Text>{nombreCompleto}</Text></Text>
                <Text variant='titleMedium'>El Color es: <Text>{modeloVehiculo}</Text></Text>
                <Text variant='titleMedium'>El modelo es: <Text>{fecha}</Text></Text>
                
                </Fragment>
      )
    })}  
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