import React,{useReducer} from "react";
import firebase from "../../firebase";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import _ from 'lodash'
import { getVehicle } from "../../type";

const FirebaseState = props =>{
    //Crea el state inicial
    const initialState ={
        vehiculo:[]
    }
    
    //userReducer con el dispatch
    const [state, dispatch]= useReducer(FirebaseReducer,initialState)
        console.log("antes de obtainVehicle")
    //traer los datos
    
    const obtainVehicle = () =>{
        //consulta a la bd
        console.log("despues de obtainVehicle")
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
    return(

        <FirebaseContext.Provider
        value ={{
            vehiculo: state.vehiculo,
            firebase,
            obtainVehicle
        }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )

}

export default FirebaseState;