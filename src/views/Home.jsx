import React from 'react'
import {  StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Button, PaperProvider,Text } from 'react-native-paper'

const Home = ({navigation}) => {
    const handleSubmit = () => {
    };
  return (
    <PaperProvider>
        <ScrollView>
            <Text style={styles.title} >Concesionario</Text>
            <Text style={styles.titleMenu} >Menu</Text>
            <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('Catalog')}}>Catalogo de vehiculos</Button>
            <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('SearchVehicle')}}>Busqueda de vehiculos</Button>
            <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('TestDrive')}}>Solicitud test drive</Button>
            <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('Quotation')}}>Solicitud de cotizacion</Button>
            <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('RepairCar')}}>Servicio de taller</Button>
            <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('HistoricService')}}>Historial de servicios</Button>
            <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('Offers')}}>Ofertas y promociones</Button>
            <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('Contact')}}>Contacto</Button>
        </ScrollView>
    </PaperProvider>
  )
}
const styles = StyleSheet.create({
    title:{
        backgroundColor: '#7F62F0',
        textAlign:'center',
        fontSize: 40,
        color: 'black',
        marginVertical:30
    },
    titleMenu:{
        backgroundColor: '#7F62F0',
        textAlign:'center',
        fontSize: 30,
        marginVertical:10
    },
    button: {
        marginHorizontal: 10,
        marginVertical:10
      },
})

export default Home