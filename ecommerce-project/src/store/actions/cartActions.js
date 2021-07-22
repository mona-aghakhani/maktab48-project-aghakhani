import { ActionTypes } from "../constants/action-type.js";

export function addToCart(cartItem){
    return {
        type:ActionTypes.ADD_TO_CART,
        payload:cartItem
    }
}
// export function toggleCart(cartItem){
//     return {
//         type:ActionTypes.TOGGLE_CART_ITEM,
//         payload:cartItem
//     }
// }


// export function actionCreatorAdd(cartItem){
//     return(dispatch,getState)=>{
//         const {cartItems}=getState()
//         const tempItem = cartItems.find((item) => item.title === cartItem.title);
//         console.log(tempItem);
//         if (tempItem) {
//             dispatch(toggleCart(cartItem))
//         }
//         dispatch(addToCart(cartItem))
//     }
// }