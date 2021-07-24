
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";
// import { AppBar } from "@material-ui/core";
// import ProductListing from "../containers/eCommerce/ProductListing";
// import ProductGroup from "../containers/eCommerce/ProductGroup";
// import ProductDetail from "../containers/eCommerce/ProductDetail";
import Cart from "../containers/eCommerce/Cart";
import FinalizeCart from "../containers/eCommerce/FinalizeCart";
import Payment from "../containers/eCommerce/Payment";
import SuccessPayment from "../containers/eCommerce/SuccessPayment";
import FailedPayment from "../containers/eCommerce/FailedPayment";
// import NotFound from "../containers/NotFound"
import PublicHeader from "../components/PublicHeader"
import PageLayout from "./PageLayout/index"
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";

// styling CircularProgress
const useStyles=makeStyles({
  progress: {
    marginLeft: '45%',
    marginTop:"15%",

  },
})


/*
* handle loading with React.lazy
*/
const ProductListing=lazy(()=>import ("../containers/eCommerce/ProductListing"))
const ProductGroup=lazy(()=>import ("../containers/eCommerce/ProductGroup"))
const ProductDetail=lazy(()=>import ("../containers/eCommerce/ProductDetail"))
const NotFound=lazy(()=>import ("../containers/NotFound"))

/*
 * separate public eCommerce website pages
 */
export const PublicRouters = (props) => {
  const classes=useStyles()
  return (
    <>
    <PageLayout>
      <PublicHeader/>
     <Suspense fallback={<CircularProgress className={classes.progress} size={100} thickness={4} disableShrink />}>
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route
          path="/listProducts/:productCategory"
          exact
          component={ProductGroup}
        />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route path="/cart" exact component={Cart} />
        <Route exact path="/finalizeCart" component={FinalizeCart} />
        {/* <Route path="/payment" exact component={Payment} /> */}
        <Route path="/success" exact component={SuccessPayment} />
        <Route path="/failed" exact component={FailedPayment} />
        <Route path="*" component={NotFound} />
      </Switch>
      </Suspense>
      </PageLayout>
    </>
  );
};

// import React from "react";
// import { Route, Switch } from "react-router-dom";
// // import { AppBar } from "@material-ui/core";
// import ProductListing from "../containers/eCommerce/ProductListing";
// import ProductGroup from "../containers/eCommerce/ProductGroup";
// import ProductDetail from "../containers/eCommerce/ProductDetail";
// import Cart from "../containers/eCommerce/Cart";
// import FinalizeCart from "../containers/eCommerce/FinalizeCart";
// import Payment from "../containers/eCommerce/Payment";
// import SuccessPayment from "../containers/eCommerce/SuccessPayment";
// import FailedPayment from "../containers/eCommerce/FailedPayment";
// import PublicHeader from "../components/PublicHeader";
// import NotFound from "../containers/NotFound"
// // import AdminLogin from "../containers/eCommerce/AdminLogin";
// /*
//  * separate public eCommerce website pages
//  */
// export const PublicRouters = (props) => {
//   return (
//     <>
//       <PublicHeader/>
     
//       <Switch>
//         <Route path="/" exact component={ProductListing} />
//         <Route
//           path="/listProducts/:productCategory"
//           exact
//           component={ProductGroup}
//         />
//         <Route path="/product/:productId" exact component={ProductDetail} />
//         <Route path="/cart" exact component={Cart} />
//         <Route exact path="/finalizeCart" component={FinalizeCart} />
//         <Route path="/payment" exact component={Payment} />
//         <Route path="/success" exact component={SuccessPayment} />
//         <Route path="/failed" exact component={FailedPayment} />
//         <Route path="*" component={NotFound} />
//       </Switch>
//     </>
//   );
// };
