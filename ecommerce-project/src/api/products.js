import axios from "axios";

export const getAllProducts = async () => {
  let res = await axios({
    method: "get",
    url: " http://localhost:5000/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => console.log(err));
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

// axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });
// export const 

// export const getAllProduct = async (email, password) => {
//   let res = await axios({
//     method: "get",
//     url: 'https://fakestoreapi.com/products',
//     headers: { "content-type": "application/json" },
//     data: JSON.stringify({
//       email,
//       password,
//     }),
//   });
// //   return res;
// const data=await res.json()
// };