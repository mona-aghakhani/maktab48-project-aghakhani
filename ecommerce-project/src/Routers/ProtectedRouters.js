import React from "react";
import { Route, Switch } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { ProtectedRoute } from "./ProtectedRoute";
import AdminLogin from "../containers/adminPanel/AdminLogin"
import Products from '../containers/adminPanel/Products';
import Prices from '../containers/adminPanel/Prices';
import Orders from '../containers/adminPanel/Orders';
import NotFound from "../containers/NotFound"
export const ProtectedRouters=(props)=>{
    return(
        <>
        {/* <ProtectedHeader/> */}
        <AppBar position="relative">protected</AppBar>
        <Switch>
        <Route path="/admin/login" exact component={AdminLogin} />
            <ProtectedRoute path="/admin/products" exact component={Products} />
            <ProtectedRoute path="/admin/prices" exact component={Prices} />
            <ProtectedRoute path="/admin/orders" exact component={Orders} />
            {/* <Route path="/admin/dashboard" exact component={Dashboard} /> */}
            <Route path="*" component={NotFound} />
        </Switch>
        </>
    )
}