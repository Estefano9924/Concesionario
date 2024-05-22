import React,{useReducer} from "react";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";
import { selectVehicle,selectTestDrive,sendTestDrive,selectQuotation } from "../../type";

const PedidoState = props =>{
    //Crea ek state inicial
    const initialState ={
        pedido:[],
        car: null,
        testDrive: null,
        quotation: null
    }

    //userReducer con el dispatch
    const [state, dispatch]= useReducer(PedidoReducer,initialState)
    const chooseVehicle = car => {
        dispatch({
            type:selectVehicle,
            payload: car
        })
    }
    //testDrive
    const conTestDrive = testDrive => {
        dispatch({
            type:selectTestDrive,
            payload: testDrive
        })
    }
    //quotation
    const conQuotation = quotation =>{
        dispatch({
            type:selectQuotation,
            payload: quotation
        })
    }
    //Confirmar testdrive
    const send_TestDrive = formTestDrive =>{
        dispatch({
            type: sendTestDrive,
            payload: formTestDrive
        })
    }
    
    return(

        <PedidoContext.Provider
        value ={{
            pedido: state.pedido,
            car: state.car,
            chooseVehicle,
            testDrive:state.testDrive,
            conTestDrive,
            quotation:state.quotation,
            conQuotation
            
        }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;