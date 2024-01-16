/*React Core */
import React from "react";
import { Route } from 'react-router-dom';

/*Ionic*/
import { setupIonicReact } from "@ionic/react";
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import "@ionic/react/css/core.css";

/*Ionic Styles*/
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Ionic Pages */
import LoginPage from "./Pages/LoginPage";
import LostPassword from "./Pages/LostPassword";

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact component={LoginPage} />
          <Route path="/lost-password/" exact component={LostPassword} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
