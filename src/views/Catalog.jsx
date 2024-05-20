import React, { Fragment, useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Avatar, PaperProvider, Text, Button, Card } from 'react-native-paper'
import VehicleList from './VehicleList';
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
                const {id,Marca,Color,modelo,referencia,imagen} = car
                return(
                    <Fragment key={id}>
                    <View style={{flexDirection: 'column', alignItems: 'end'}} >
                    <Text>El id es: {id}</Text>
                    <Text>La marca es: {Marca}</Text>
                    <Text>El Color es: {Color}</Text>
                    <Text>El modelo es: {modelo}</Text>
                    <Text>La referencia es: {referencia}</Text>
                    <Card>
                        <Card.Cover source ={{uri:imagen}} />
                    </Card>
                    <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('Contact')}}> Contactar 📱</Button>
                    {/*<Image size ="70px" source ={{uri:imagen}}></Image> */}
                   {/*} <List.Item 
                    title = {Marca} 
                    modelo = {modelo} 
                    color ={Color}
                        onPress ={()=>{
                            chooseVehicle(car);
                            navigation.navigate("Contact")
                        }}
                    >
                        <Text>{Marca}</Text>
                        <Text note
                        numberOfLines={2}>{modelo}</Text>
                        <Text note
                        numberOfLines={2}>{Color}</Text>
                        
                    </List.Item>*/}
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