import React from 'react'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import { barChartOutline, receiptOutline, newspaperOutline, personCircleOutline } from 'ionicons/icons';

import LoginPage from '../Pages/LoginPage';
// import Dashboard from './Dashboard';
import Invoices from '../Pages/Invoices';
// import Profile from './Profile';

const NavigationTabs = () => {
  return (
    <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
                <Redirect exact path="/" to="/home" />

                {/* <Route path="/home" render={() => <Dashboard />} exact={true} /> */}
                <Route path="/login" render={() => <LoginPage />} exact={true} />
                <Route path="/invoices" render={() => <Invoices />} exact={true} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon icon={barChartOutline} />
                </IonTabButton>

                <IonTabButton tab="login" href="/login">
                    <IonIcon icon={receiptOutline} />
                </IonTabButton>

                <IonTabButton tab="invoices" href="/invoices">
                    <IonIcon icon={newspaperOutline} />
                </IonTabButton>

                <IonTabButton tab="profile" href="/profile">
                    <IonIcon icon={personCircleOutline} />
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  )
}

export default NavigationTabs