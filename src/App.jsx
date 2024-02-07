import "./App.css";
import { setupIonicReact, IonApp, IonPage } from "@ionic/react";
import NavigationTabs from "./components/NavigationTabs";

import "@ionic/react/css/ionic.bundle.css";

setupIonicReact();

function App() {
  return (
    <IonApp>
      <IonPage>
        <NavigationTabs />
      </IonPage>
    </IonApp>
  );
}

export default App;
