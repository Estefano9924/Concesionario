import React,{useReducer} from "react";
import firebase from "../../firebase";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import _ from 'lodash'
import { getVehicle,getTestDrive,getRepairCar,getQuotation,getContact } from "../../type";

const FirebaseState = props =>{
    //Crea el state inicial
    const initialState ={
        vehiculo:[],
        solTestDrive:[],
        solRepairCar:[],
        solQuotation:[],
        solContact:[]
    }
       
    //userReducer con el dispatch
    const [state, dispatch]= useReducer(FirebaseReducer,initialState)
    //traer los datos
    
    const obtainVehicle = () =>{
        //consulta a la bd
        firebase.db
        .collection('vehicle')//asi se llama la coleccion en firebase
        .onSnapshot(manejarSnapshot)//manejo de la base de datos en tiempo real
          
        function manejarSnapshot(snapshot) {
            //desestructurar objeto
            let car = snapshot.docs.map(doc =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });
            //Organizar informacion consultada lodahs
            console.log("Antes del sort by")
            car = _.sortBy(car,'Marca')
            console.log(car)
            //el dispatch es del useReducer
            dispatch({
                type: getVehicle,
                payload: car
            });
        }
    }

    //Datos para TestDrive
    const obtainTestDrive = () =>{
        //consulta a la bd
        firebase.db
        .collection('testDrive')//asi se llama la coleccion en firebase
        .onSnapshot(manejarSnapshot)//manejo de la base de datos en tiempo real
          
        function manejarSnapshot(snapshot) {
            //desestructurar objeto
            let testDrive = snapshot.docs.map(doc =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });
            //Organizar informacion consultada lodahs
            console.log("Consultado a testDrive")
            testDrive = _.sortBy(testDrive,'nombreCompleto')
            console.log(testDrive)
            //el dispatch es del useReducer
            dispatch({
                type: getTestDrive,
                payload: testDrive
            });
        }
    }
    const obtainQuotation = () =>{
        //consulta a la bd
        firebase.db
        .collection('quotationC')//asi se llama la coleccion en firebase
        .onSnapshot(manejarSnapshot)//manejo de la base de datos en tiempo real
          
        function manejarSnapshot(snapshot) {
            //desestructurar objeto
            let carQuotation = snapshot.docs.map(doc =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });
            carQuotation = _.sortBy(carQuotation,'nombreCompletoC')
            console.log(carQuotation)
            //el dispatch es del useReducer
            dispatch({
                type: getQuotation,
                payload: carQuotation
            });
        }
    }
    const obtainRepairCar = () =>{
        //consulta a la bd
        firebase.db
        .collection('repairCar')//asi se llama la coleccion en firebase
        .onSnapshot(manejarSnapshot)//manejo de la base de datos en tiempo real
          
        function manejarSnapshot(snapshot) {
            //desestructurar objeto
            let carRepair = snapshot.docs.map(doc =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });
            //Organizar informacion consultada lodahs
            console.log("Antes del sort by")
            carRepair = _.sortBy(carRepair,'Marca')
            console.log(carRepair)
            //el dispatch es del useReducer
            dispatch({
                type: getRepairCar,
                payload: carRepair
            });
        }
    }
    const obtainContact = () =>{
        //consulta a la bd
        firebase.db
        .collection('contact')//asi se llama la coleccion en firebase
        .onSnapshot(manejarSnapshot)//manejo de la base de datos en tiempo real
          
        function manejarSnapshot(snapshot) {
            //desestructurar objeto
            let carContac = snapshot.docs.map(doc =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });
            //Organizar informacion consultada lodahs
            console.log("Antes del sort by")
            carContac = _.sortBy(carContac,'cNombreCompleto')
            console.log(carContac)
            //el dispatch es del useReducer
            dispatch({
                type: getContact,
                payload: carContac
            });
        }
    }
    return(

        <FirebaseContext.Provider
        value ={{
            vehiculo: state.vehiculo,
            firebase,
            obtainVehicle,
            solTestDrive:state.solTestDrive,
            obtainTestDrive,
            solRepairCar:state.solRepairCar,
            firebase,
            obtainRepairCar,
            solQuotation: state.solQuotation,
            firebase,
            obtainQuotation,
            solContact:state.solContact,
            firebase,
            obtainContact

        }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )

}

export default FirebaseState;