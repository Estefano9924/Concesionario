import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';


const RegisterServices = ({route}) => {
    const {name, number, model, id, service, date} = route.params;

    useEffect(()=>{name, number, model, id, service, date})
  return (
    <View style={styles.Contain}>
        <Text style={styles.title}>Informacion Registrada</Text>
        <Text style={styles.Text}>Hola {name}, Su cita fue programada para {date} para {service} de su vehiculo, Lo estaremos esperando</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Contain: {
      flex: 1,
      justifyContent:'center'
    },
    Text: {
        fontSize: 20,
        textAlign: 'center'
      },
      title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
      },
})

export default RegisterServices
