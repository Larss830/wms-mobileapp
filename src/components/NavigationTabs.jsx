import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
  IonFab,
  IonFabButton,
  IonFabList,
  IonImg,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import {
  barChartOutline,
  receiptOutline,
  newspaperOutline,
  personCircleOutline,
  listOutline,
  pieChartOutline,
  cashOutline,
} from "ionicons/icons";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Invoices from "../pages/Invoices";
import Profile from "../pages/Profile";

import wmsLogo from "../assets/wms-small-icon.webp";
import AddNewProduct from "../pages/products/AddNewProduct";
import AddNewInvoice from "../pages/invoice/AddNewInvoice";
import AddNewPurchaseOrder from "../pages/purchaseOrders/AddNewPurchaseOrder";
import AddNewSalesOrder from "../pages/salesOrders/AddNewSalesOrder";

const NavigationTabs = () => {
  const navTabRoutingButtons = [
    {
      key: "tab-home",
      tabName: "home",
      tabLink: "/home",
      tabIcon: barChartOutline,
      tabPageComponent: <Dashboard />,
    },
    {
      key: "tab-login",
      tabName: "login",
      tabLink: "/login",
      tabIcon: receiptOutline,
      tabPageComponent: <Login />,
    },
    {
      key: null,
      tabName: null,
      tabLink: null,
      tabIcon: null,
      tabPageComponent: null,
    }, // Empty tab to make space for the Floating Action Button in the middle
    {
      key: "tab-invoices",
      tabName: "invoices",
      tabLink: "/invoices",
      tabIcon: newspaperOutline,
      tabPageComponent: <Invoices />,
    },
    {
      key: "tab-profile",
      tabName: "profile",
      tabLink: "/profile",
      tabIcon: personCircleOutline,
      tabPageComponent: (
        <Profile
          profileName="Jon A. Tan"
          profilePosition="Company Owner"
          profilePhone="+639123456789"
          profileEmail="jdegs@mail.com"
          profileWebsite="Project Zealous"
          profileWebLink="/"
        />
      ),
    },
  ];

  const floatingTabRoutingButtons = [
    {
      key: "float-1",
      tabName: "addSalesOrder",
      tabLink: "/add-sales-order",
      tabIcon: listOutline,
      tabPageComponent: <AddNewSalesOrder />,
    },
    {
      key: "float-2",
      tabName: "addPurchaseOrder",
      tabLink: "/add-purhcase-order",
      tabIcon: cashOutline,
      tabPageComponent: <AddNewPurchaseOrder />,
    },
    {
      key: "float-3",
      tabName: "addNewInvoice",
      tabLink: "/add-new-invoice",
      tabIcon: pieChartOutline,
      tabPageComponent: <AddNewInvoice />,
    },
    {
      key: "float-4",
      tabName: "addNewProduct",
      tabLink: "/add-new-product",
      tabIcon: listOutline,
      tabPageComponent: <AddNewProduct />,
    },
  ];

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
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
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {navTabRoutingButtons.map((button) => (
            <IonTabButton
              key={button.key}
              tab={button.tabName}
              href={button.tabLink}
            >
              <IonIcon icon={button.tabIcon} />
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>

      <IonFab vertical="bottom" horizontal="center" slot="fixed" edge="false">
        <IonFabButton type="button" color="light">
          <IonImg src={wmsLogo} className="login-circle-top" />
        </IonFabButton>
        <IonFabList side="top">
          {floatingTabRoutingButtons.map((button) => (
            <IonFabButton
              key={button.key}
              type="button"
              color="light"
              href={button.tabLink}
            >
              <IonIcon icon={button.tabIcon}></IonIcon>
            </IonFabButton>
          ))}
        </IonFabList>
      </IonFab>
    </IonReactRouter>
  );
};

export default NavigationTabs;
