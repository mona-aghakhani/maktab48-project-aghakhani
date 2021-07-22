import { ActionTypes } from "../constants/action-type";
const initialState=[]
    

export const cartReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            const tempItem = state.find((item) => item.id === payload.id);
            if (tempItem) {
                return state.splice(state.cart.findIndex(item=>item.id === payload.id),1,payload)
                  
            }else{
                return [...state,payload]
            }
            
    
        default:
            return state;
    }
}
// const initialState={
//     cart:[]
// }
// export const cartReducer=(state=initialState,{type,payload})=>{
//     switch (type) {
//         case ActionTypes.ADD_TO_CART:
//             const tempItem = state.cart.find((item) => item.id === payload.id);
//             if (tempItem) {
//                 return{
//                     ...state,
//                     // cart:state.cart.splice(state.cart.findIndex(item=>item.id === payload.id),1,payload)
//                     cart:state.cart.splice(state.cart.findIndex(item=>item.id === payload.id),1,payload)
//                   }
//             }else{
//                 return{
//                     ...state,
//                     cart:[...state.cart,payload]
//                 }
//             }
            
    
//         default:
//             break;
//     }
// }