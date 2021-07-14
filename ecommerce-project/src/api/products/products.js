import axios from "axios";
import {toast} from "react-toastify"
/*
 * GET api for get all products
 */


export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5000/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  // console.log(res);
  return res;
};

/*
 *  POST api for add a new product
 */

export const postNewProduct =async (newProduct) => {
   try { let res = await axios({
    method: "post",
    url: "http://localhost:5000/products",
    headers: { "content-type": "application/json" },
    data: newProduct
   })
if (res.status === 201) {
  // console.log("post data is ok");
  // toast.success(` added successfully`)
}
if (res.status === 404) {
  // console.log("post data is ok");
  return toast.error("Not found")
 } 
if (res.status === 500) {
  return toast.error("Network error")
 } 
   console.log("post api",res);
  return res;
  }catch (err) {
    //  console.log(err) 
  };
}
// export const postNewProduct =async (newProduct) => {
//   let res = await axios({
//     method: "post",
//     url: "http://localhost:5000/products",
//     headers: { "content-type": "application/json" },
//     data: newProduct
//   }).catch((err) => console.log(err));
//   console.log("post api",res);
//   return res;
// }

/*
 *  DELETE api for delete selected product
 */
export const deleteApiProduct = async (id) => {
  let res = await axios({
    method: "delete",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  });
  // console.log(res);
  return res;
};
/*
*  PUT api for update product
*/


export const putApiProduct = async (id,updateProduct) => {
  try {
  let res = await axios({
    method: "put",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
    data: updateProduct,
  })
  return res;
}
catch (err) {
  console.log(err) 
};
  // console.log("res put api",res);
  
};


/*
 * GET api for get a product
 */

export const getAProductById = async (id) => {
  let res = await axios({
    method: "get",
    url: ` http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

