import React,{useReducer} from "react";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";

const PedidoState = props =>{
    //Crea ek state inicial
    const initialState ={
        pedido:[]
    }

    //userReducer con el dispatch
    const [state, dispatch]= useReducer(PedidoReducer,initialState)
    
    return(

        <PedidoContext.Provider
        value ={{pedido: state.vehiculo}}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;