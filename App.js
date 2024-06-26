import 'react-native-gesture-handler'
import React from 'react'
import Home from './src/views/Home'
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Catalog from './src/views/Catalog'
import SearchVehicle from './src/views/SearchVehicle'
import TestDrive from './src/views/TestDrive'
import Quotation from './src/views/Quotation'
import RepairCar from './src/views/RepairCar'
import HistoricService from './src/views/HistoricService'
import Offers from './src/views/Offers'
import Contact from './src/views/Contact'
import RegisterContact from './src/views/RegisterContact'
import RegisterServices from './src/views/RegisterServices'
import RegisterTestDrive from './src/views/RegisterTestDrive'
import FirebaseState from './context/firebase/firebaseState'
import PedidoState from './context/pedidos/pedidoState'
import BuyVehicle from './src/views/BuyVehicle'


const Stack = createStackNavigator();
const App = () => {
  return (

    <FirebaseState>
      <PedidoState>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Catalog" component={Catalog} />
              <Stack.Screen name="SearchVehicle" component={SearchVehicle} />
              <Stack.Screen name="TestDrive" component={TestDrive} />
              <Stack.Screen name="Quotation" component={Quotation} />
              <Stack.Screen name="RepairCar" component={RepairCar} />
              <Stack.Screen name="HistoricService" component={HistoricService} />
              <Stack.Screen name="Offers" component={Offers} />
              <Stack.Screen name="Contact" component={Contact} />
              <Stack.Screen name="RegisterContact" component={RegisterContact} />
              <Stack.Screen name="RegisterServices" component={RegisterServices} />
              <Stack.Screen name="RegisterTestDrive" component={RegisterTestDrive} />
              <Stack.Screen name="BuyVehicle" component={BuyVehicle} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PedidoState>
    </FirebaseState>
    
  )
}

export default App