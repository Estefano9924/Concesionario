import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const RegisterContact = ({ route }) => {
  const { name, typeId, id, number, email, city } = route.params;

  useEffect(() => { name, typeId, id, number, email, city })

  return (
    <View style={styles.Contain}>
      <Text style={styles.title}>Informacion Registrada</Text>
      <Text style={styles.Text}>Hola {name}, Pronto nos estaremos Comunicando con usted ya sea por telefono al numero {number} o al correo {email}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  Contain: {
    flex: 1,
    justifyContent: 'center'
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

export default RegisterContact
