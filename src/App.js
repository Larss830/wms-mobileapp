/*React Core */
import React from "react";

/*Ionic*/
import { setupIonicReact } from "@ionic/react";
import "@ionic/react/css/core.css";
import '@ionic/react/css/ionic.bundle.css';

/* Ionic Pages */
import NavigationTabs from "./Components/NavigationTabs";

setupIonicReact();

const App = () => {
  return (
    <NavigationTabs />
  );
};

export default App;
