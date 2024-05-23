import { selectVehicle,selectTestDrive,sendTestDrive,selectQuotation,selectRepairCar, selectContact } from "../../type";

export default (state,action) =>{

    switch(action.type){
        case selectVehicle:
            return{
                ...state,
                car: action.payload
            }
        case selectTestDrive:
            return{
                ...state,
                testDrive: action.payload
            }
        case sendTestDrive:
            return{
                ...state,
                formTestDrive: [...state.formTestDrive, action.payload]
            }
        case selectQuotation:
            return{
                ...state,
                carQuotation: action.payload
            }
        case selectRepairCar:
            return{
                ...state,
                carRepair: action.payload
            }
        case selectContact:
            return{
                carContact: action.payload
            }           
        default:
            return state;
    }
}