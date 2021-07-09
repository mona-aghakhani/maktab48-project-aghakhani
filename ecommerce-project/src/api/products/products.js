import axios from "axios";

/*
 * GET api for get all products
 */


export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5000/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  console.log(res);
  return res;
};

/*
 *  POST api for add a new product
 */


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
export const postNewProduct =async (newProduct) => {
  let res = await axios({
    method: "post",
    url: "http://localhost:5000/products",
    headers: { "content-type": "application/json" },
    data: newProduct
  }).catch((err) => console.log(err));
  console.log("post api",res);
  return res;
}
// axios.post("http://localhost:5000/products",newProduct)
// .then(function (response) {
//   if (response.status === 404) {
//     return toast.error("Not defined")
//   }
//   // console.log(response.data)
//   return response.data
//   // console.log(response);
// })
  // try {
  //   let res = await axios({
  //         method: "post",
  //         url: " http://localhost:5000/products/",
  //         headers: { "content-type": "application/json" },
  //         data: newProduct,
  //       });
        
  //       console.log(res);
  //       return res;

  //   // const data = await res.json();

  //   // setTasks([...tasks, data]);
  //   // toast.success(`${data.text} added successfully`);
  // } catch (e) {
  //   // toast.error(`${task.text} didn't add becuase of an unkown error:(`);
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
  console.log(res);
  return res;
};
/*
*  PUT api for update product
*/


export const putApiProduct = async (id,updateProduct) => {
  let res = await axios({
    method: "put",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
    data: updateProduct,
  });
  console.log("res put api",res);
  return res;
};

// export const postNewProduct = async (newProduct) => {
//   let res = await axios({
//     method: "post",
//     url: " http://localhost:5000/products",
//     headers: { "content-type": "application/json" },
//     data: JSON.stringify(newProduct),
//   });
//   return res;
// };


// const deleteProduct = (id) => {
//   axios.delete(`http://localhost:5000/products${id}`)
//     .then((res) => {
//       if (res.status === 404) {
//         toast.error("Not defined");
//       }

//       // setTasks(tasks.filter((task) => task.id !== taskId));
//     })
//     .catch((err) => {
//       toast.error("request failed!");
//     });
// };
// export const deleteApiProduct = async (id) => {
//   let res = await axios({
//     method: "delete",
//     url: `http://localhost:5000/products/${id}`,
//     headers: { "content-type": "application/json" },
//   });
//   console.log(res);
//   return res;
// };

// const deleteProduct = (id) => {
//   fetch(`http://localhost:5000/products${id}`, {
//     method: "DELETE",
//   })
//     .then((res) => {
//       if (res.status === 404) {
//         // toast.error("Not defined");
//       }
//       // setTasks(tasks.filter((task) => task.id !== taskId));
//     })
//     .catch((err) => {
//       // toast.error("request failed!");
//     });
// };

/*
*  PUT api for update product
*/

// export const putUpdatedProduct = async (updateProduct,id) => {
//   let res = await axios({
//     method: "put",
//     url: `http://localhost:5000/products/${id}`,
//     headers: { "content-type": "application/json" },
//     data: JSON.stringify(updateProduct),
//   });
//   return res;
// };







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


// Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
