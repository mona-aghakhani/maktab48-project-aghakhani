import { getAProductById, getAllProducts } from "../../api/products";
import { ActionTypes } from "../constants/action-type.js";

export const setToken = (token) => {
  return {
    type: ActionTypes.SET_TOKEN,
    payload: token,
  };
};

export const setProducts=(products)=>{
  return{
      type:ActionTypes.SET_PRODUCTS,
      payload:products,
  }
}

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

/*
* async action for get all products
*/

export const getProducts = () => async (dispatch, getState) => {
  let res = await getAllProducts();
  dispatch(setProducts(res.data));
};

/*
* use .then .catch
*/

// export const getProducts = () => (dispatch, getState) => {
//   getAllProducts().then((res) => {
//     console.log(res.data);
//     dispatch(setProducts(res.data));
//   });
// };

/*
* async action for get a product
*/


export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
  console.log(res.data);
  dispatch(selectedProduct(res.data));
};
