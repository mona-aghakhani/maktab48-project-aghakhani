import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import PageLayout from "./layout/PageLayout";
import { ProtectedRouters } from "./Routers/ProtectedRouters";
import { PublicRouters } from "./Routers/PublicRouters";
import AdminLogin from "./containers/adminPanel/AdminLogin";
/*
 * define high level routes
 */

function App() {
  return (
    // <div className="App">
    <React.Fragment>
      <Router>
        <PageLayout>
          <Switch>
            <Route path="/admin/login" exact component={AdminLogin} />

            <Route path="/" component={PublicRouters} />
            <Route path="/admin" component={ProtectedRouters} />
          </Switch>
        </PageLayout>
      </Router>
    </React.Fragment>
  );
}

export default App;
