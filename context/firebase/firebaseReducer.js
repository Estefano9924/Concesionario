import { getVehicle,getTestDrive } from "../../type";

export default (state,action) =>{
    switch(action.type){
        case getVehicle:
            return{
                ...state,
                vehiculo: action.payload
            }
        case getTestDrive:
            return{
                ...state,
                testDrive: action.payload
            }    
        default:
            return state;
    }
}