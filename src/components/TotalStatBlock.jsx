import { IonRow, IonCol, IonText } from "@ionic/react";

import React from "react";

const TotalStatBlock = ({ statHeading, statValue }) => {
  return (
    <IonRow>
      <IonCol className="ion-text-left" size="7">
        <IonText color="dark">{statHeading}</IonText>
      </IonCol>
      <IonCol className="ion-text-right" size="5">
        <IonText color="primary" className="bold">
          {statValue}
        </IonText>
      </IonCol>
    </IonRow>
  );
};

export default TotalStatBlock;
