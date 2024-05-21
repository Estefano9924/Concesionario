import React, { Fragment, useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Avatar, PaperProvider, Text, Button, Card } from 'react-native-paper'
import BuyVehicle from './BuyVehicle';
import FirebaseContext from '../../context/firebase/firebaseContext';
import pedidoContext from '../../context/pedidos/pedidoContext';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const Catalog = () => {
    const {vehiculo, obtainVehicle}= useContext(FirebaseContext)
    const {chooseVehicle} = useContext(pedidoContext);
    const navigation = useNavigation()
    useEffect(()=>{
        obtainVehicle()
    },[])
   return (
    <ScrollView>
        <View style ={styles.container}>       
            <Text style = {styles.title}>Catalogo de vehiculos</Text>
            {vehiculo.map((car,i)=>{
                const {id,Marca,Color,modelo,referencia,imagen,precio,descripcion} = car
                return(
                    <Fragment key={id}>
                    <View style={{flexDirection: 'column', alignItems: 'end'}} >
                    {/*<Text variant='titleMedium'>El id es: {id}</Text>*/}
                    <Text variant='titleMedium'>La marca es: <Text>{Marca}</Text></Text>
                    <Text variant='titleMedium'>El Color es: <Text>{Color}</Text></Text>
                    <Text variant='titleMedium'>El modelo es: <Text>{modelo}</Text></Text>
                    <Text variant='titleMedium'>La referencia es: <Text>{referencia}</Text></Text>
                    <Text variant='titleMedium'>El precio es: $<Text>{precio}</Text></Text>
                    <Text variant='titleMedium'>La descripcion es: <Text>{descripcion}</Text></Text>
                    <Card>
                        <Card.Cover source ={{uri:imagen}} />
                    </Card>
                    <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('BuyVehicle')}}> Comprar 🛒</Button>
                    </View>
                    </Fragment>
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
    },
    button: {
        marginHorizontal: 10,
        marginVertical:10,
        backgroundColor: '#0f83b8'
      }
})
export default Catalog