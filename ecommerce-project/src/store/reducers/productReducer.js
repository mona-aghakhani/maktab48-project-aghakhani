  
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
      return { ...state, products:[...state.products,payload] };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products:state.products.filter((item,index)=>item.id !==payload) 
    }
    case ActionTypes.UPDATE_PRODUCT:{
      const updatedData=state.products.splice((payload.id)-1,1,payload)
      return { ...state, products:updatedData };
    }
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: payload };

    default:
      return state;
  }
};
