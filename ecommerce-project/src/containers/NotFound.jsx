import { Link,useHistory,useLocation } from "react-router-dom";
import React from "react";

const NotFound = () => {
  let history=useHistory()
  let location=useLocation()
  console.log(location);
  console.log(history);
  console.log(history.location.pathname);
  return (
    <div className="page-container">
      <h1>Not Found</h1>
      <p><strong>{location.pathname}</strong>&nbsp;
         is not found</p>
         <button className="btn" onClick={()=>history.push("/")}>go to task page</button>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
