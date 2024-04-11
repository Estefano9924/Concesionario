import React, { useState } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, PaperProvider, Text, TextInput } from 'react-native-paper'


const Contact = ({navigation}) => {

  const [name, Setname]= useState('');
  const [typeId, SettypeId]= useState('');
  const [id, SetId]= useState('');
  const [number, SetNumber]= useState('');
  const [email, SetEmail]= useState('');
  const [city, SetCity]= useState('');
  
  const HandlerSend =() =>{
    navigation.navigate('RegisterContact',{name:name, typeId:typeId, id:id, number:number, email:email, city:city})
  }

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
          <TextInput style={styles.textinput} value={name} onChangeText={name =>Setname(name)}></TextInput>
          <Text style={styles.form}>Documento</Text>
          <TextInput style={styles.textinput} value={typeId} onChangeText={typeId =>SettypeId(typeId)}></TextInput>
          <Text style={styles.form}>Numero Documentos</Text>
          <TextInput style={styles.textinput} value={id} onChangeText={id =>SetId(id)}></TextInput>
          <Text style={styles.form}>Telefono</Text>
          <TextInput style={styles.textinput} value={number} onChangeText={number =>SetNumber(number)}></TextInput>
          <Text style={styles.form}>Correo</Text>
          <TextInput style={styles.textinput} value={email} onChangeText={email =>SetEmail(email)}></TextInput>
          <Text style={styles.form}>Ciudad</Text>
          <TextInput style={styles.textinput} value={city} onChangeText={city =>SetCity(city)}></TextInput>
          <Button mode='contained' style={styles.formButton} onPress={HandlerSend}>Enviar</Button>
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