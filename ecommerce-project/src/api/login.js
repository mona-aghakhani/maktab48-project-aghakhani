import axios from "axios";
/*
*use api successlogin reqres
*/
export const login = async (email, password) => {
  let res = await axios({
    method: "post",
    url: "https://reqres.in/api/login",
    headers: { "content-type": "application/json" },
    data: JSON.stringify({
      email,
      password,
    }),
  });
  return res;
};
