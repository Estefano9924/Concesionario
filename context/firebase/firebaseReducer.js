import { getVehicle } from "../../type";

export default (state,action) =>{
    switch(action.type){
        case getVehicle:
            return{
                ...state,
                vehiculo: action.payload
            }
        default:
            return state;
    }
}