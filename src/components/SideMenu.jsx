import React from "react";
import {
  IonMenu,
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonButton,
  IonTabButton,
  IonMenuToggle,
  IonContent,
  IonLabel,
  IonText,
} from "@ionic/react";
import ProfileHeader from "../components/ProfileHeader";
import userAvatar from "../assets/male-avatar-placeholder.png";
import { Link } from "react-router-dom";
import { Route } from "react-router";


import InvoicesArchive from "../pages/invoice/InvoicesArchive";
import ProductsArchive from "../pages/products/ProductsArchive";

const SideMenu = () => {
  const menuLinks = [
    {
      key: "menu-products",
      tabName: "Products",
      tabLink: "/Products",
      tabPageComponent: < ProductsArchive/>,
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
    minHeight: '10em',
    marginTop: '6em'
  };

  const tabButtonStyle = {
    minHeight: '2em',
  };
  return (
    <>
      <IonMenu contentId="main-content">
        <ProfileHeader
          profileName={"John Doe"}
          userAvatar={userAvatar}
          profilePosition={"Web Developer"}
        />
        <IonTabs style={tabsLayout}>
          <IonRouterOutlet>
          </IonRouterOutlet>
          <IonTabBar slot="top" style={tabBarLayout}>
            {menuLinks.map((link) => (
              <IonTabButton
                key={link.key}
                tab={link.tabName}
                href={link.tabLink}
                style={tabButtonStyle}
              >
                <IonText>{link.tabName}</IonText>
              </IonTabButton>
            ))}
          </IonTabBar>
        </IonTabs>
      </IonMenu>
    </>
  );
};

export default SideMenu;
