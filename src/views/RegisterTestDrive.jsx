import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const RegisterTestDrive = ({route}) => {
    const {name, model, date} = route.params;

    useEffect(() => {name, model, date} )
  
    return (
    <View style={styles.contain}>
        <Text style={styles.title}>Solicitud de test drive enviada</Text>
        <Text style={styles.text}>Hola {name}, la solicitud del test drive esta para la fecha: {date} con el modelo de vehiculo: {model}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contain:{
        flex: 1,
        justifyContent:'center'
    },
    text:{
        fontSize: 20,
        textAlign: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
      },

})

export default RegisterTestDrive