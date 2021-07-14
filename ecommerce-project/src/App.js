import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageLayout from "./layout/PageLayout";
// import { ProtectedRouters } from "./-Routers/ProtectedRouters";
// import { PublicRouters } from "./-Routers/PublicRouters";
import { ProtectedRouters } from "./layout/ProtectedLayout";
import { PublicRouters } from "./layout/PublicLayout";
import AdminLogin from "./containers/adminPanel/AdminLogin";
// import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
/*
 * define high level routes
 */

function App() {
  return (
    // <div className="App">
    <React.Fragment>
       
      <Router>
        <PageLayout>
        {/* <ToastContainer /> */}
          <Switch>
         
          <Route path="/login" exact component={AdminLogin} />
            <Route path="/admin"  component={ProtectedRouters} />
            <Route path="/"  component={PublicRouters} />
            
          
          </Switch>
        </PageLayout>
      </Router>
    </React.Fragment>
  );
}

export default App;
