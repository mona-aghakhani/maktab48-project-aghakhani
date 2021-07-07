import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

/*
 * GET api for get all products
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
 *  POST api for add a new product
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
/*
 *  DELETE api for delete selected product
 */

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
export const deleteApiProduct = async (id) => {
  let res = await axios({
    method: "delete",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  });
  console.log(res);
  return res;
};
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
