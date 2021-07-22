import { ActionTypes } from "../constants/action-type.js";

export const addToCart=(cartItem)=>{
    return {
        type:ActionTypes.ADD_TO_CART,
        payload:cartItem
    }
}