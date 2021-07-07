import { getAProductById, getAllProducts,postNewProduct,deleteApiProduct,putUpdatedProduct } from "../../api/products";
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
export function addProduct(newProduct){
    return{
        type:ActionTypes.ADD_PRODUCT,
        payload:newProduct
    }
}
export function deleteProduct(id){
    return{
        type:ActionTypes.DELETE_PRODUCT,
        payload:id
    }
}
export function updateProductAct(updatedProduct){
    return{
        type:ActionTypes.UPDATE_PRODUCT,
        payload:updatedProduct
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
* async action for add new product
*/

export const addNewProduct = (newProduct) => async (dispatch, getState) => {
  let res = await postNewProduct();
  dispatch(updateProductAct(newProduct));
};


/*
* async action for delete product
*/
export const deleteProductById = (id) => async (dispatch, getState) => {
  let res = await deleteApiProduct(id);
  dispatch(deleteProduct(id));
};


/*
* async action for update product
*/

export const updatedProduct = (newProduct,id) => async (dispatch, getState) => {
  let res = await putUpdatedProduct(newProduct,id);
  dispatch(updateProductAct(newProduct));
};



/*
* async action for get a product
*/


export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
  console.log(res.data);
  dispatch(selectedProduct(res.data));
};
