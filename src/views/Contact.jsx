import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'
import firebase from '../../firebase'
import firebaseConfig from '../../firebase/config'


const Contact = () => {
const[saveContact,setSaveContact] = useState({
  cCiudad:'',
  cCorreo:'',
  cNombreCompleto:'',
  cNumeroDocumento:'',
  cTelefono:''
});
const handleInputContact = (cName,value)=>{
  setSaveContact({
    ...saveContact,
    [cName]:value
  });
};
const handleSendContact = async () =>{
  const {cNombreCompleto, cNumeroDocumento, cTelefono, cCorreo, cCiudad } = saveContact;
  if(cNombreCompleto && cNumeroDocumento && cTelefono && cCorreo && cCiudad){
    try{
      await firebase.db.collection('contact').add(saveContact);
      console.log('Contacto enviado');
    }catch(error){
      console.log(error);
    }
  }else{
    console.log('Validar los campos por favor')
  }
};
  return (
    <PaperProvider>
      <ScrollView>
        <View>
          <Text style={styles.title}>Contacto</Text>
        </View>
        <View style={styles.Contain}>
          <Text style={styles.subtitle}>Queremos Escucharte</Text>
          <Text style={styles.paragh}>Tu opinión y tus comentarios son muy importantes para nosotros. Nos aseguraremos de revisar tus comentarios y darte respuesta tan pronto como nos sea posible.</Text>
          <View style={styles.ContImage}>
            <Image style={styles.image} source={{ uri: 'https://media.istockphoto.com/id/1395134717/es/foto/feliz-vendedor-vendiendo-el-coche-a-su-clienta-en-una-sala-de-exposici%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=IDtCBxzMKbATOm7-GK3VLn-IpHk6JT28FuXjcs_8aTk=' }} />
          </View>
          <View style={styles.formContain}>
          <Text style={styles.form}>Nombre completo</Text>
          <TextInput 
          style={styles.textinput} 
          label={"Nombre completo"}
          value = {saveContact.cNombreCompleto}
          onChangeText={(value)=>handleInputContact('cNombreCompleto',value)}
          >
          </TextInput>
          <Text style={styles.form}>Numero Documentos</Text>
          <TextInput 
          style={styles.textinput} 
          label={"Numero de documento"}
          value = {saveContact.cNumeroDocumento}
          onChangeText={(value)=>handleInputContact('cNumeroDocumento',value)}
          >
          </TextInput>
          <Text style={styles.form}>Telefono</Text>
          <TextInput 
          style={styles.textinput} 
          label={"Telefono"}
          value = {saveContact.cTelefono}
          onChangeText={(value)=>handleInputContact('cTelefono',value)}
          >
          </TextInput>
          <Text style={styles.form}>Correo</Text>
          <TextInput 
          style={styles.textinput}
          label={"Correo"}
          value = {saveContact.cCorreo}
          onChangeText={(value)=>handleInputContact('cCorreo',value)}
          >
          </TextInput>
          <Text style={styles.form}>Ciudad</Text>
          <TextInput 
          style={styles.textinput} 
          label={"Ciudad"}
          value = {saveContact.cCiudad}
          onChangeText={(value)=>handleInputContact('cCiudad',value)}
          > 
          </TextInput>
          <Button 
          mode='contained' 
          style={styles.formButton}
          onPress={handleSendContact}

          >Enviar
          </Button>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  Contain: {
    flex: 1,
    justifyContent: 'Center'
  },
  title: {
    backgroundColor: '#0f83b8',
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    marginVertical: 30
  },
  ContImage: {
    flex: 1,
    alignItems:'center'
  },
  image: {
    height: 400,
    width: 400,
  },
  paragh: {
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 20
  },
  form: {
    fontSize: 20,
    textAlign:'center',
    paddingVertical:10,
    fontWeight: '500'
  },
  formContain:{
    marginVertical:30,
    marginHorizontal:20
  },
  formButton:{
    marginTop: 40,
    backgroundColor: '#0f83b8'
  },
  textinput:{
    backgroundColor:'#afd1e7'
  }
})
export default Contact