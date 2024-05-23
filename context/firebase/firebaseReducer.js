import { getVehicle,getTestDrive,getQuotation,getRepairCar,getContact} from "../../type";

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
        case getQuotation:
            return{
                ...state,
                carQuotation: action.payload
            }
        case getRepairCar:
            return{
                carRepair : action.payload
            }
        case getContact:
            return{
                carContact: action.payload
            }            
        default:
            return state;
    }
}