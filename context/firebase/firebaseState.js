import React,{useReducer} from "react";
import firebase from "../../firebase";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";

const FirebaseState = props =>{
    //Crea ek state inicial
    const initialState ={
        vehiculo:[]
    }

    //userReducer con el dispatch
    const [state, dispatch]= useReducer(FirebaseReducer,initialState)
    
    return(

        <FirebaseContext.Provider
        value ={{vehiculo: state.vehiculo, firebase}}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;