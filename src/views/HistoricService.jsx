import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PaperProvider, Text } from 'react-native-paper'

const HistoricService = () => {
  return (
    <PaperProvider>
        <View>
            <Text style={styles.title}>Historial de servicio</Text>
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
    }
})
export default HistoricService