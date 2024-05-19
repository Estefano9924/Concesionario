import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Avatar, PaperProvider, Text } from 'react-native-paper'
import VehicleList from './VehicleList';
import FirebaseContext from '../../context/firebase/firebaseContext';
import pedidoContext from '../../context/pedidos/pedidoContext';
import { ScrollView } from 'react-native-gesture-handler';


const Catalog = (navigation) => {
    const {vehiculo, obtainVehicle}= useContext(FirebaseContext)
    useEffect(()=>{
        obtainVehicle()
    },[])
   return (
    <ScrollView>
        <View style ={styles.container}>       
            <Text style = {styles.title}>Catalogo de vehiculos</Text>
            {vehiculo.map((car)=>{
                const {id,Marca,Color,modelo,referencia,imagen} = car
                return(
                    <View>
                    <Text>El id es: {id}</Text>
                    <Text>La marca es: {Marca}</Text>
                    <Text>El Color es: {Color}</Text>
                    <Text>El modelo es: {modelo}</Text>
                    <Text>La referencia es: {referencia}</Text>
                    </View>
                )

            })}
        </View>
        </ScrollView>
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
    container:{
        flex:1,
    }
})
export default Catalog