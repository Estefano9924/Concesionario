import { selectVehicle } from "../../type";

export default (state,action) =>{

    switch(action.type){
        case selectVehicle:
            return{
                ...state,
                car: action.payload
            }
        default:
            return state;
    }
}