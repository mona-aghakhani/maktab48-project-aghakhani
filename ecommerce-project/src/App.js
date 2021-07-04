import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from "./components/Header";
import { ProtectedRouters } from "./Routers/ProtectedRouters";
import { PublicRouters } from "./Routers/PublicRouters";

/*
 * define high level routes
 */

function App() {
  return (
    // <div className="App">
    <React.Fragment>
      <Router>
        <MainHeader/>
        <Switch>
          <Route path="/admin" component={ProtectedRouters} />
          <Route path="/" component={PublicRouters} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
