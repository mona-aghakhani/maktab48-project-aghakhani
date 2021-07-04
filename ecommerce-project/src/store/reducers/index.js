import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import{ productReducer }from "./productReducer"
export const reducers = combineReducers({
  token: tokenReducer,
  allProducts:productReducer,
});
