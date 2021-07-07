import axios from "axios";

/*
* get api for 
*/

export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: " http://localhost:5000/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

/*
* api post for add data
*/
export const postNewProduct = async (newProduct) => {
  let res = await axios({
    method: "post",
    url: " http://localhost:5000/products",
    headers: { "content-type": "application/json" },
    data: JSON.stringify(newProduct),
  });
  return res;
};



export const getAProductById = async (id) => {
  let res = await axios({
    method: "get",
    url: ` http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  return res;
};

