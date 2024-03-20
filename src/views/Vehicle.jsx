import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Vehicle = ({ urlImagen, description, price }) => {

  return (
    <View style={styles.container}>
      <Image source={{ uri: urlImagen }} style={styles.image} />
      <Text style={styles.title}>{description}</Text>
      <Text style={styles.text}>$ {price}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    resizeMode:'cover',
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10

  },
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

export default Vehicle