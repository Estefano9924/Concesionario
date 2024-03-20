import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PaperProvider, Text, ProgressBar, MD3Colors, Tooltip, IconButton } from 'react-native-paper'


const Offers = () => {
  return (
    <PaperProvider>
      <View>
        <Text style={styles.title}>Ofestas y promociones</Text>
        <ProgressBar animatedValue={0.5} color={MD3Colors.error50} />

        <Tooltip title="Selected Camera">
          <IconButton icon="" selected size={24} onPress={() => { }} />
        </Tooltip>

      </View>

    </PaperProvider>
  )
}
const styles = StyleSheet.create({
  title: {
    backgroundColor: '#7F62F0',
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    marginVertical: 30
  }

})
export default Offers