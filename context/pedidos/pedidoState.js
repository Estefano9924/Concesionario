import React,{useReducer} from "react";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";
import { selectVehicle,selectTestDrive,sendTestDrive,selectQuotation,selectRepairCar,selectContact } from "../../type";

const PedidoState = props =>{
    //Crea ek state inicial
    const initialState ={
        pedido:[],
        car: null,
        testDrive: null,
        carRepair: null,
        carQuotation: null,
        carContact: null
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
    //RepairCar
    const chooseRepairCar = carRepair => {
        dispatch({
            type:selectRepairCar,
            payload: carRepair
        })
    }
    //quotation
    const chooseQuotation = carQuotation =>{
        dispatch({
            type:selectQuotation,
            payload: carQuotation
        })
    }
    //contact
    const chooseContact = carContact => {
        dispatch({
            type:selectContact,
            payload: carContact
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
            carRepair:state.carRepair,
            chooseRepairCar,
            carQuotation:state.carQuotation,
            chooseQuotation,
            carContact:state.carContact,
            chooseContact
            
        }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;