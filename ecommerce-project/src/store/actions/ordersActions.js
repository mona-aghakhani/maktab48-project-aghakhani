import {getAllOrders,putStatus} from "../../api/orders/orders"
import { ActionTypes } from "../constants/action-type.js";
/*
* declare sync actions
*/
export const setOrders = (orders) => {
    return {
      type: ActionTypes.SET_ORDERS,
      payload: orders,
    };
  };
  export function setLoading(){
    return{
        type:ActionTypes.SET_LOADING,
        // payload:
    }
}
export function changeStatus(updatedObj){
return{
  type:ActionTypes.PUT_STATUS,
  payload:updatedObj,
}
}

  /*
 * async action for get all Orders
 */

export const getOrders = () => async(dispatch, getState) => {
    const res = await getAllOrders();
    // console.log("res data Orders from async action",res.data);
    dispatch(setOrders(res.data));
    dispatch(setLoading())
  }

  export const updateOrderById = (id,updateOrder) => async (dispatch, getState) => {
    let res = await putStatus(id,updateOrder);
    console.log("res from put api",res);
    dispatch(changeStatus(updateOrder));
  };