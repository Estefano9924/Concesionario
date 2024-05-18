import React,{useReducer} from "react";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";
import { selectVehicle } from "../../type";

const PedidoState = props =>{
    //Crea ek state inicial
    const initialState ={
        pedido:[],
        car: null
    }

    //userReducer con el dispatch
    const [state, dispatch]= useReducer(PedidoReducer,initialState)
    const chooseVehicle = car => {
        dispatch({
            type:selectVehicle,
            payload: car
        })
    }
    
    return(

        <PedidoContext.Provider
        value ={{
            pedido: state.pedido,
            car: state.car,
            chooseVehicle
            
        }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;