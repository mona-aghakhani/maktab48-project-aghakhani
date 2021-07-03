
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from './components/Header';
import { ProtectedRoute } from "./ProtectedRoute";
import ProductListing from "./containers/eCommerce/ProductListing";
import ProductGroup from "./containers/eCommerce/ProductGroup"
import ProductDetail from "./containers/eCommerce/ProductDetail"
import ShoppingCart from "./containers/eCommerce/ShoppingCart"
import SuccessPayment from './containers/eCommerce/SuccessPayment';
import FailedPayment from './containers/eCommerce/FailedPayment';
import AdminLogin from "./containers/adminPanel/AdminLogin"
import Products from './containers/adminPanel/Products';
import Prices from './containers/adminPanel/Prices';
import Orders from './containers/adminPanel/Orders';
import NotFound from "./containers/NotFound"
import PageTemplate from "./components/PageTemplate"

function App() {
  
  return (
    // <div className="App">
       <React.Fragment>
           
    <Router >
    {/* <MainHeader/> */}
    <Switch>
      {/* <PageTemplate> */}
            <Route path="/" exact component={ProductListing} />
            <Route path="/products/:productCategory" exact component={ProductGroup} />
            <Route path="/product/:productId" exact component={ProductDetail} />
            <Route path="/shoppingCart" exact component={ShoppingCart} />
            <Route path="/success" exact component={SuccessPayment} />
            <Route path="/failed" exact component={FailedPayment} />
            <Route path="/shoppingCart" exact component={ShoppingCart} />
            {/* </PageTemplate> */}
     
            <Route path="/admin/login" exact component={AdminLogin} />
            <ProtectedRoute path="/admin/products" exact component={Products} />
            <ProtectedRoute path="/admin/prices" exact component={Prices} />
            <ProtectedRoute path="/admin/orders" exact component={Orders} />
            {/* <Route path="/admin/dashboard" exact component={Dashboard} /> */}
            <Route path="*" component={NotFound} />
            
  </Switch>
   
    
    </Router>
    </React.Fragment>
    
  );
}

export default App;
