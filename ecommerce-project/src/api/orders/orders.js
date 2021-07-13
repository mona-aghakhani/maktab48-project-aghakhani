import axios from "axios";
// import {toast} from "react-toastify"
/*
 * GET api for get all orders
 */


export const getAllOrders = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5000/orders",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
  console.log(res);
  return res;
};