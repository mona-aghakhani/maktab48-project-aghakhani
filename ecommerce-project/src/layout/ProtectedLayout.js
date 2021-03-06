import React from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Products from '../containers/adminPanel/Products';
import Prices from '../containers/adminPanel/Prices';
import Orders from '../containers/adminPanel/Orders';
import NotFound from "../containers/NotFound";
import PageLayout from "../layout/PageLayout"
import ProtectedHeader from "../components/ProtectedHeader"
export const ProtectedRouters=(props)=>{
    return(
        <>
        <PageLayout>
        <ProtectedHeader/>
      {/* <main style={{height:"80vh"}}> */}
        <Switch>
        {/* <Route path="/admin/login" exact component={AdminLogin} /> */}
            <ProtectedRoute path="/admin/products" exact component={Products} />
            {/* <ProtectedRoute path="/admin/products" exact component={Products} /> */}
            <ProtectedRoute path="/admin/prices" exact component={Prices} />
            <ProtectedRoute path="/admin/orders" exact component={Orders} />
            {/* <Route path="/admin/dashboard" exact component={Dashboard} /> */}
            <Route path="*" component={NotFound} />
        </Switch>
        {/* </main> */}
        </PageLayout>
        </>
    )
}