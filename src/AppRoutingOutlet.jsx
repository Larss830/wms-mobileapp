import React from "react";

import { Route, Redirect } from "react-router";

import EditProfile from "./pages/profile/EditProfile";
import ProductsArchive from "./pages/products/ProductsArchive";
import SingleInvoice from "./pages/invoice/SingleInvoice";
import {
  navTabRoutingButtons,
  floatingTabRoutingButtons,
} from "./data/RoutingData";

const AppRoutingOutlet = () => {
  return (
    <>
      <Redirect exact path="/" to="/home" />
      {navTabRoutingButtons.map((route) => (
        <Route
          key={route.key}
          path={route.tabLink}
          render={() => route.tabPageComponent}
          exact={true}
        />
      ))}
      {floatingTabRoutingButtons.map((route) => (
        <Route
          key={route.key}
          path={route.tabLink}
          render={() => route.tabPageComponent}
          exact={true}
        />
      ))}
      <Route
        key={"link-edit-profile"}
        path={"/edit-profile"}
        render={() => <EditProfile />}
        exact={true}
      />
      <Route
        key={"products"}
        path={"/products"}
        render={() => <ProductsArchive />}
        exact={true}
      />
      <Route
        key={"singleInvoice"}
        path={"/single-invoice/num-:invoiceNo"}
        render={() => <SingleInvoice />}
        exact={true}
      />
    </>
  );
};

export default AppRoutingOutlet