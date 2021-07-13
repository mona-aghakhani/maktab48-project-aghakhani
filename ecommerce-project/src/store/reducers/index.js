import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import{ productReducer }from "./productReducer"
import{ orderReducer }from "./orderReducer"
export const reducers = combineReducers({
  token: tokenReducer,
  allProducts:productReducer,
  allOrders:orderReducer,
});
