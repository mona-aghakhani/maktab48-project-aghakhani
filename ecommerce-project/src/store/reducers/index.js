import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import{ productReducer }from "./productReducer"
import{ orderReducer }from "./orderReducer"
import { cartReducer } from "./cartReducer";
export const reducers = combineReducers({
  token: tokenReducer,
  allProducts:productReducer,
  allOrders:orderReducer,
  cartItems:cartReducer
});
