// import { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";
// // axios.defaults.baseURL = 'http://localhost:5000/products';
// export const useAxios = ({ url, method, body = null, headers = null }) => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setloading] = useState(true);

//   const fetchData = () => {
//     axios[method](url)
//       .then((res) => {
//         if (res.status === 404) {
//           toast.error("Not defined");
//         }
//         setResponse(res.data.results);
//         console.log(res.data.results);
//       })
//       .catch((err) => {
//         setError(err);
//       })
//       .finally(() => {
//         setloading(false);
//       });
//   };
// let notifToast=<ToastContainer/>
//   useEffect(() => {
//     fetchData();
//   }, [method, url, body, headers]);

//   return {notifToast, fetchData,response, error, loading };
// };

import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

/**
 fixed :
  - no need to JSON.stringify to then immediatly do a JSON.parse
  - don't use export defaults, because default imports are hard to search for
  - axios already support generic request in one parameter, no need to call specialized ones
**/
export const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
      try {
       const result = await axios.request(params);
       setResponse(result.data);
       } catch( error ) {
         setError(error);
       } finally {
         setLoading(false);
       }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []); // execute once only

    return { response, error, loading };
};
