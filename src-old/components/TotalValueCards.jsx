import {IonRow, IonCol, IonText} from "@ionic/react";
import React from "react";

const TotalValueCards = ({cardHeading, cardValue}) => {
  return (
    <IonRow className="ion-padding ion-margin-bottom box-shadow curved ion-align-items-center small-padding">
      <IonCol className="ion-text-left text-medium" size="8">
        <IonText color="dark">{cardHeading}</IonText>
      </IonCol>
      <IonCol className="ion-text-right text-medium" size="4">
        <IonText color="secondary" className="" style={{fontSize:'30px'}}>
          {cardValue}
        </IonText>
      </IonCol>
    </IonRow>
  );
};

export default TotalValueCards;
