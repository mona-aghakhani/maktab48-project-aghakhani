import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import ProductListing from "../containers/eCommerce/ProductListing";
import ProductGroup from "../containers/eCommerce/ProductGroup";
import ProductDetail from "../containers/eCommerce/ProductDetail";
import ShoppingCart from "../containers/eCommerce/ShoppingCart";
import Payment from "../containers/eCommerce/Payment";
import SuccessPayment from "../containers/eCommerce/SuccessPayment";
import FailedPayment from "../containers/eCommerce/FailedPayment";
import PublicHeader from "../components/PublicHeader"
// import AdminLogin from "../containers/eCommerce/AdminLogin";
/*
 * separate public eCommerce website pages
 */
export const PublicRouters = (props) => {
  return (
    <>
      <PublicHeader/>
     
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route
          path="/listProducts/:productCategory"
          exact
          component={ProductGroup}
        />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route path="/shoppingCart" exact component={ShoppingCart} />
        <Route path="/payment" exact component={Payment} />
        <Route path="/success" exact component={SuccessPayment} />
        <Route path="/failed" exact component={FailedPayment} />
       
      </Switch>
    </>
  );
};
