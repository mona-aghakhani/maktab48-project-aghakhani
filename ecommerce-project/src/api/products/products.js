import axios from "axios";
import { toast } from "react-toastify"

const axiosConfig = axios.create({
  // ..  make baseURL
  baseURL: 'http://localhost:5000'
});
/*
 * GET api for get all products
 */


export const getAllProducts = async () => {
  let res = await axiosConfig({
    method: "get",
    url: "/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  // console.log(res);
  return res;
};

/*
 *  POST api for add a new product
 */

export const addedProduct = async (newProduct) => {
  try {
    let res = await axiosConfig({
      method: "post",
      url: "/products",
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
    console.log("post api", res);
    return res;
  } catch (err) {
    //  console.log(err) 
    throw err
  };
}
// export const postNewProduct =async (newProduct) => {
//   let res = await axiosConfig({
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
export const deleteProduct = async (id) => {
  let res = await axiosConfig({
    method: "delete",
    url: `/products/${id}`,
    headers: { "content-type": "application/json" },
  });
  // console.log(res);
  return res;
};
/*
*  PUT api for update product
*/


export const updateProduct = async (id, updateProduct) => {
  try {
    let res = await axiosConfig({
      method: "put",
      url: `/products/${id}`,
      headers: { "content-type": "application/json" },
      data: updateProduct,
    })
    return res;
  }
  catch (err) {

    throw err
  };
  // console.log("res put api",res);

};

/*
 * GET api for get categoryList & limit6
 */
// 'http://localhost:5000/products?category=&start=0&_limit=6'
export const getDairyList = async () => {
  let res = await axiosConfig({
    method: "get",
    url: '/products?category=لبنیات&start=0&_limit=6',
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
  // console.log(res.data);
  // setData(res.data)
}
export const getWasherList = async () => {
  let res = await axiosConfig({
    method: "get",
    url: '/products?category=شوینده&start=0&_limit=6',
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
  
}
export const getDrinkList = async () => {
  let res = await axiosConfig({
    method: "get",
    url: '/products?category=نوشیدنی&start=0&_limit=6',
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
 
}
export const getGroceryList = async () => {
  let res = await axiosConfig({
    method: "get",
    url: '/products?category=خواروبار&start=0&_limit=6',
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
 
}

/*
 * GET api for get a product
 */

export const getAProductById = async (id) => {
  let res = await axiosConfig({
    method: "get",
    url: ` /products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

