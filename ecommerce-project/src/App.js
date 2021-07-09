import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import PageLayout from "./layout/PageLayout";
import { ProtectedRouters } from "./Routers/ProtectedRouters";
import { PublicRouters } from "./Routers/PublicRouters";
import AdminLogin from "./containers/adminPanel/AdminLogin";
import { ToastContainer, toast } from "react-toastify";
/*
 * define high level routes
 */

function App() {
  return (
    // <div className="App">
    <React.Fragment>
       <ToastContainer />
      <Router>
        <PageLayout>
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
