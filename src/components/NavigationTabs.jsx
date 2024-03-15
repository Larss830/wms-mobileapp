import React, { useState, useEffect } from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonFab, IonFabButton, IonFabList, IonImg, IonLabel } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from '@ionic/react';
import { Link } from "react-router-dom";

import { navTabRoutingButtons, floatingTabRoutingButtons } from "../data/RoutingData"

import MainSideMenu from "./MainSideMenu";
import wmsLogo from "../assets/wms-small-icon.webp";
import AppRoutingOutlet from '../AppRoutingOutlet';

const NavigationTabs = () => {

  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    const tabsInner = document.querySelector('.ion-page');
    isActivated ? tabsInner.classList.add('fab-open') : tabsInner.classList.remove('fab-open');
  }, [isActivated]);

  const handleActivation = () => {
    isActivated ? setIsActivated(false) : setIsActivated(true)
  };

  return (
    <IonReactRouter>
        <div className={`fab-overlay ${isActivated ? 'fab-opened' : ''}`} onClick={handleActivation}></div>
      <MainSideMenu/>
      <IonTabs>
      <IonRouterOutlet>
        <AppRoutingOutlet />
      </IonRouterOutlet>
        <IonTabBar slot="bottom">
          {navTabRoutingButtons.map((button) => (
            <IonTabButton key={button.key} tab={button.tabName} href={button.tabLink}>
              <IonIcon icon={button.tabIcon} />
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
      <IonFab vertical="bottom" horizontal="center" slot="fixed" edge="false" activated={isActivated} onClick={handleActivation}>
        <IonFabButton type="button" color="light">
          <IonImg src={wmsLogo} className="login-circle-top" />
        </IonFabButton>
        <IonFabList side="top" style={{minWidth:'150px'}}>
          {floatingTabRoutingButtons.map((button) => (
            <Link to={button.tabLink} key={button.key} style={{display:'flex', flexWrap:'no-wrap', width:'150px', alignItems:'center'}} className='no-underline'>
              <IonFabButton type="button" color="light" size= "small">
                <IonIcon icon={button.tabIcon}></IonIcon>
              </IonFabButton>
              <IonLabel color='dark' className='text-small'>fab label</IonLabel>
            </Link>
          ))}
        </IonFabList>
      </IonFab>
    </IonReactRouter>
  );
};

export default NavigationTabs;
