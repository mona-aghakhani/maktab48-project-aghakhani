  
import { ActionTypes } from "../constants/action-type";

const initialState = {
  products: [],
  selectedProduct: {},
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.ADD_PRODUCT:
      return { ...state, products:[payload,...state.products] };
    case ActionTypes.DELETE_PRODUCT:{
      const newdata=state.products.filter((product,index)=>index !==payload)
      return { ...state, products:newdata };
    }
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };

    default:
      return state;
  }
};
