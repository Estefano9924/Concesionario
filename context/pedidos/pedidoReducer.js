import { selectVehicle,selectTestDrive,sendTestDrive,selectQuotation } from "../../type";

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
                quotation: action.payload
            }   
        default:
            return state;
    }
}