import React, { useContext,useState } from 'react'
import { StyleSheet, View,Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, PaperProvider, Text, TextInput, Card,Portal,Modal } from 'react-native-paper'
import {Box} from 'native-base'
import Home from './Home';
import pedidoContext from '../../context/pedidos/pedidoContext';
import { useNavigation } from '@react-navigation/native';

const BuyVehicle = ({navigation}) => {
    const {car} = useContext (pedidoContext)
    //desestructurar objeto
    const {Marca, Color, modelo, referencia, imagen, precio, descripcion} = car
    //modal
    const [visible, setVisible] = useState(false);
    const [vehicle, setVehicle] = useState('');
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const Send = () => Alert.alert("Compra exitosa");

    return (
      <PaperProvider>
          <View>
              <Text style={styles.title}>Comprar Vehiculo</Text>
              
                <Text>{/*{descripcion}*/}</Text>
                <Card>
                    <Card.Cover size = "70px" source ={{uri:imagen}}/>
                    <Card.Content>
                        <Text>Marca: {Marca}</Text>
                        <Text>Color: {Color}</Text>
                        <Text>Modelo: {modelo}</Text>
                        <Text>Referencia: {referencia}</Text>
                        <Text>Precio: ${precio}</Text>
                        <Portal>
                          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.container}>
                            <Text>Example Modal</Text>
                          </Modal>
                        </Portal>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={Send}>
                            <Text>Comprar</Text>
                        </Button>
                    </Card.Actions>
                </Card>
              
              <Button mode = "contained" style={styles.button} onPress={()=>{navigation.navigate('Home')}}>Regresar al home</Button>
          </View>
      </PaperProvider>
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
      button: {
        marginHorizontal: 10,
        marginVertical:10,
        backgroundColor: '#0f83b8'
      }
  })

  export default BuyVehicle