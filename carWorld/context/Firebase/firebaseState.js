import React, { useReducer } from "react";
import firebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import Home from "../../../src/views/Home";
import Quotation from "../../../src/views/Quotation";

const FirebaseState = props =>{
    const initialState={
        Quotation:[]
    }

    const [state, dispatch] = useReducer (firebaseReducer,initialState) 

    return(
        <FirebaseContext.Provider>
            {props.children}
        </FirebaseContext.Provider>        
    )
}
export default FirebaseState;