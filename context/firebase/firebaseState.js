import React,{useReducer} from "react";
import firebase from "../../firebase";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import _ from 'lodash'
import { getVehicle,getTestDrive,getQuotation } from "../../type";

const FirebaseState = props =>{
    //Crea el state inicial
    const initialState ={
        vehiculo:[],
        solTestDrive:[]
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
        .collection('cotizacion')//asi se llama la coleccion en firebase
        .onSnapshot(manejarSnapshot)//manejo de la base de datos en tiempo real
          
        function manejarSnapshot(snapshot) {
            //desestructurar objeto
            let quotation = snapshot.docs.map(doc =>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });
            quotation = _.sortBy(quotation,'nombreCompleto')
            console.log(quotation)
            //el dispatch es del useReducer
            dispatch({
                type: getQuotation,
                payload: quotation
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
            solQuotation: state.solQuotation,
            obtainQuotation

        }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )

}

export default FirebaseState;