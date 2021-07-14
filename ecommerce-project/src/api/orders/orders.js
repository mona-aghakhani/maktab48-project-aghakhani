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
 
  return res;
};

/*
* PUT api for change orderStatus 
*/

export const putStatus=async (id,updatedObj) =>{
let res=await axios({
  method:"put",
  url: `http://localhost:5000/orders/${id}`,
  headers: { "content-type": "application/json" },
  data:updatedObj,
})
return res
}