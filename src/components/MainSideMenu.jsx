import React from "react";
import {
  IonMenu,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonText,
  IonGrid,
  IonRow,
} from "@ionic/react";
import ProfileHeader from "./ProfileHeader";
import userAvatar from "../assets/male-avatar-placeholder.png";
import { Link } from "react-router-dom";
import { Route } from "react-router";

import InvoicesArchive from "../pages/invoice/InvoicesArchive";
import ProductsArchive from "../pages/products/ProductsArchive";

const MainSideMenu = () => {
  const menuLinks = [
    {
      key: "menu-products",
      tabName: "Products",
      tabLink: "/Products",
      tabPageComponent: <ProductsArchive />,
    },
    {
      key: "menu-invoices",
      tabName: "Invoices",
      tabLink: "/invoices",
      tabPageComponent: <InvoicesArchive />,
    },
    // {
    //   key: "tab-invoices",
    //   tabName: "Invoices",
    //   tabLink: "/invoices",
    //   tabPageComponent: <PurchaseOrdersArchive />,
    // },
    // {
    //   key: "tab-invoices",
    //   tabName: "Invoices",
    //   tabLink: "/invoices",
    //   tabPageComponent: <SalesOrdersArchive />,
    // },
  ];

  const tabsLayout = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const tabBarLayout = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100px",
    marginTop: "7em",
  };

  const tabButtonStyle = {
    minHeight: "50px",
    maxWidth: "100%",
    width: "100%",
    marginRight: "10em",
    border: "none",
  };

  const menuLinkTextStyle = {
    margin: "10px 0",
  };

  return (
    <>
      <IonMenu contentId="main-content" side="end" maxEdgeStart="500">
        <IonGrid>
          <IonRow>
            <ProfileHeader
              profileName={"John Doe"}
              userAvatar={userAvatar}
              profilePosition={"Web Developer"}
            />
          </IonRow>
        </IonGrid>

        <IonTabs style={tabsLayout}>
          <IonRouterOutlet></IonRouterOutlet>
          <IonTabBar slot="top" style={tabBarLayout}>
            {menuLinks.map((link) => (
              <IonTabButton
                key={link.key}
                tab={link.tabName}
                href={link.tabLink}
                style={tabButtonStyle}
              >
                <IonText>
                  <h6 style={menuLinkTextStyle}>{link.tabName}</h6>
                </IonText>
              </IonTabButton>
            ))}
          </IonTabBar>
        </IonTabs>
      </IonMenu>
    </>
  );
};

export default MainSideMenu;
