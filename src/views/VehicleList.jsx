import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Vehicle from './Vehicle'
import { StyleSheet } from 'react-native'

const VehicleList = ({vehicles}) => {
  return (
    <ScrollView >
        {vehicles.map((vehicle)=>(
            <Vehicle
            key={vehicle.id}
            urlImagen={vehicle.imagenUrl}
            description={vehicle.description}
            price = {vehicle.price}/>
            ))}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
export default VehicleList