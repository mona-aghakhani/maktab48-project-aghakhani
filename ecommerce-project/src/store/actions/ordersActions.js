import {getAllOrders} from "../../api/orders/orders"
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

  /*
 * async action for get all Orders
 */

export const getOrders = () => async(dispatch, getState) => {
    const res = await getAllOrders();
    console.log("res data Orders from async action",res.data);
    dispatch(setOrders(res.data));
    dispatch(setLoading())
  }