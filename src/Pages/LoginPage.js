import React from "react";
import {
  IonContent,
  IonPage,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import WMSLogo from "../Assets/WMS Logo - Horizontal.webp";
import FloatingCirlceBottom from "../Assets/floating-circle-bottom.webp";
import FloatingCirlceTop from "../Assets/floating-circle-top.webp";
import LoginForm from "../Components/LoginForm";

const LoginPage = () => {

  const floatingCircleStyleTop = {
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex:'-1'
  };
  const floatingCircleStyleBottom = {
    position: 'absolute',
    right: '0',
    bottom: '-0',
    zIndex:'-1'
  };

   const logoStyle = {
    width: "80%",
    maxWidth: "300px",
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:"3em",
  };

  const topSpacingStyles = {
    paddingTop:'5em',
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
      <IonImg src={FloatingCirlceTop} alt="Circle" className="floating-circle" style={floatingCircleStyleTop}/>
      <IonGrid style={topSpacingStyles}>
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol size="12" sizeMd="6" sizeLg="4" className="ion-justify-content-center ion-align-items-center ion-text-center">
              <IonImg src={WMSLogo} alt="Logo" className="logo" style={logoStyle}/>
              <LoginForm />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonImg src={FloatingCirlceBottom} alt="Circle" className="floating-circle" style={floatingCircleStyleBottom}/>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
